import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IUserApi } from '../../../_shared/interfaces/iuser';
import { JsonPlaceholderService } from '../../../_services/json-place-holder.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import html2pdf from 'html2pdf.js';


@Component({
  selector: 'app-json-placeholder-crud',
  templateUrl: './json-place-holder-crud-component..html',
  styleUrl: './json-place-holder-crud-component.css',
  imports: [ReactiveFormsModule, RouterLink, CommonModule]

})
export class JsonPlaceHolderCrudComponent implements OnInit {
  protected users: IUserApi[] = [];
  protected userForm!: FormGroup;
  protected selectedUserId: number | null = null;
  protected loading = false;
  protected message = '';
  protected isError = false;
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

  fetchUsers(): void {
    this.loading = true;
    this.jsonPlaceholderService.getUsers().subscribe({
      next: (users) => {
        this.users = users;
        this.loading = false;
      },
      error: () => {
        this.message = 'Erro ao carregar os dados.';
        this.isError = true;
        this.loading = false;
      },
    });
  }

  onSubmit(): void {
    if (this.userForm.invalid) return;

    const user = this.userForm.value;

    if (this.selectedUserId === null) {
      this.createUser(user);
    } else {
      this.updateUser(user);
    }
  }

  createUser(user: IUserApi): void {
    this.jsonPlaceholderService.createUser(user).subscribe({
      next: (newUser) => {
        this.users.unshift(newUser);
        this.message = 'Usuário criado com sucesso!';
        this.isError = false;
        this.userForm.reset();
      },
      error: () => {
        this.message = 'Erro ao criar usuário.';
        this.isError = true;
      },
    });
  }

  editUser(user: IUserApi): void {
    this.selectedUserId = user.id!;
    this.userForm.patchValue(user);
  }

  updateUser(user: IUserApi): void {
    this.jsonPlaceholderService.updateUser(this.selectedUserId!, user).subscribe({
      next: (updated) => {
        const index = this.users.findIndex(u => u.id === this.selectedUserId);
        if (index > -1) this.users[index] = updated;
        this.message = 'Usuário atualizado com sucesso!';
        this.isError = false;
        this.resetForm();
      },
      error: () => {
        this.message = 'Erro ao atualizar usuário.';
        this.isError = true;
      },
    });
  }

  deleteUser(id: number): void {
    this.jsonPlaceholderService.deleteUser(id).subscribe({
      next: () => {
        this.users = this.users.filter(u => u.id !== id);
        this.message = 'Usuário excluído.';
        this.isError = false;
      },
      error: () => {
        this.message = 'Erro ao excluir usuário.';
        this.isError = true;
      },
    });
  }

  resetForm(): void {
    this.userForm.reset();
    this.selectedUserId = null;
  }

  /**paninação */

  get paginatedUsers() {
  const startIndex = (this.currentPage - 1) * this.itemsPerPage;
  return this.users.slice(startIndex, startIndex + this.itemsPerPage);
}

get totalPages() {
  return Math.ceil(this.users.length / this.itemsPerPage);
}

changePage(page: number) {
  if (page >= 1 && page <= this.totalPages) {
    this.currentPage = page;
  }
}

  get pages(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }


}
