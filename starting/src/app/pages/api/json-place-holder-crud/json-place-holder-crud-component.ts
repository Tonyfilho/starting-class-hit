import { Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IUserApi } from '../../../_shared/interfaces/iuser';
import { JsonPlaceholderService } from '../../../_services/json-place-holder.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import html2pdf from 'html2pdf.js';
import { PopUpService } from '../../../_shared/pop-up/pop-up.service';


@Component({
  selector: 'app-json-placeholder-crud',
  templateUrl: './json-place-holder-crud-component..html',
  styleUrl: './json-place-holder-crud-component.css',
  imports: [ReactiveFormsModule, RouterLink, CommonModule]

})
export class JsonPlaceHolderCrudComponent implements OnInit {
  private popupService = inject(PopUpService);
  protected users: IUserApi[] = [];
  protected userForm!: FormGroup;
  protected selectedUserId: number | null = null;
  protected currentPage = 1;
  protected itemsPerPage = 10;


  @ViewChild('pdfContent') content!: ElementRef;

  downloadPDF() {
    const options = {
      filename: 'Crud-guide.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(options).from(this.content.nativeElement).save();
  }

  constructor(
    private jsonPlaceholderService: JsonPlaceholderService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.fetchUsers();
  }

  initForm(): void {
    this.userForm = this.fb.group({
      title: ['', Validators.required],
      body: ['', Validators.required],
      userId: [1, Validators.required],
    });
  }

  protected fetchUsers(): void {
    this.jsonPlaceholderService.getUsers().subscribe({
      next: (users) => {
        this.users = users;
       this.popupService.show("Get User Success ", 'success');
      },
      error: (e) => {
        this.popupService.show("Opss Someting Wrong, Try Again: " + e.message);
      },
    });
  }

  protected onSubmit(): void {
    if (this.userForm.invalid) return;

    const user = this.userForm.value;
    if (this.selectedUserId === null) {
      this.createUser(user);
      console.log("User Id Created ", this.selectedUserId);
    } else {
      this.updateUser(user);
    }
  }

  protected createUser(user: IUserApi): void {
    this.jsonPlaceholderService.createUser(user).subscribe({
      next: (newUser) => {
        this.users.unshift(newUser);
        this.popupService.show("Create a User Success ", 'success');
        this.userForm.reset();
      },
      error: (e) => {
        this.popupService.show("Opss Someting Wrong, Try Again: " + e.message);
      },
    });
  }

  protected editUser(user: IUserApi): void {
    this.selectedUserId = user.id!;
    this.userForm.patchValue(user);
  }

  protected updateUser(user: IUserApi): void {
    this.jsonPlaceholderService.updateUser(this.selectedUserId!, user).subscribe({
      next: (updated) => {
        this.popupService.show("Update a User Success ", 'success');
        const index = this.users.findIndex(u => u.id === this.selectedUserId);
        if (index > -1) this.users[index] = updated;
        this.resetForm();
      },
      error: (e) => {
        this.popupService.show("Opss Someting Wrong, Try Again: " + e.message);
      },
    });
  }

  protected deleteUser(id: number): void {
    this.jsonPlaceholderService.deleteUser(id).subscribe({
      next: () => {
        this.users = this.users.filter(u => u.id !== id);
        this.popupService.show("Get User Success ", 'success');
      },
      error: (e) => {
        this.popupService.show("Opss Someting Wrong, Try Again: " + e.message);
      },
    });
  }

  protected resetForm(): void {
    this.userForm.reset();
    this.selectedUserId = null;
  }

  /***************************paninação e explicação */
  /**
* O que faz paginatedUsers():
* Calcula os usuários que devem ser exibidos na página atual
* startIndex: Calcula o índice inicial baseado na página atual (currentPage) e itens por página (itemsPerPage)
* Retorna uma fatia (slice) do array users contendo apenas os itens da página atual
* Exemplo:
* Se currentPage = 2 e itemsPerPage = 10
* startIndex = (2-1)*10 = 10
* Retorna usuários de índice 10 a 19 (10 itens)
   */
  get paginatedUsers() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.users.slice(startIndex, startIndex + this.itemsPerPage);
  }


  /**O que faz get totalPages():
* Calcula o número total de páginas necessárias
* Math.ceil arredonda para cima (para garantir que os itens restantes tenham uma página)
* Divide o total de usuários pelo número de itens por página
* Exemplo:
* Se users.length = 23 e itemsPerPage = 10
*Retorna 3 (23/10 = 2.3 → arredonda para 3).
 */

  get totalPages() {
    return Math.ceil(this.users.length / this.itemsPerPage);
  }

  /**O que faz changePage(page: number):
* Muda para a página especificada
* Verifica se a página está dentro dos limites válidos (1 a totalPages)
* Atualiza currentPage se a página for válida
* Proteções:
* Impede navegação para páginas inexistentes
* Não faz nada se tentar ir para página 0 ou página maior que o total
*  */
  changePage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  /**O que faz get pages():
* Cria um array com os números de todas as páginas disponíveis
* Array.from cria um novo array com totalPages elementos
* O segundo parâmetro é uma função que mapeia cada índice (i) para i+1 (criando números de 1 a N)
* Exemplo:
* Se totalPages = 3
* Retorna [1, 2, 3]
* Fluxo Completo:
* O componente usa paginatedUsers para mostrar apenas os itens da página atual
* totalPages e pages são usados para mostrar os controles de paginação
* Quando o usuário clica em uma página, changePage() é chamado
* Isso atualiza currentPage, que por sua vez atualiza paginatedUsers
* Benefícios:
* Eficiência: Trabalha com fatias do array, não carrega todos os itens de uma vez
* Reatividade: Como são getters, atualizam automaticamente quando os dados mudam
* Controle: Validação robusta contra navegação inválida
* Essa implementação é típica para paginação no lado do cliente (quando todos os dados já estão carregados no frontend). *
* Para grandes conjuntos de dados, normalmente se implementaria paginação no servidor. */

  get pages(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }


}
