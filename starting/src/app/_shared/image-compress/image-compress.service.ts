import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';



/**
 * Recebe um arquivo de imagem

* Redimensiona para no máximo 200px mantendo proporção

* Comprime para JPEG com 70% de qualidade

* Converte para Base64

* Retorna a string Base64 comprimida via Observable

* Calcula e exibe estatísticas de compressão

* Este serviço é útil para:

* Reduzir tamanho de imagens antes de upload

* Otimizar imagens para exibição web

* Economizar espaço de armazenamento */
@Injectable({
  providedIn: 'root'
})
export class ImageCompressService {

  constructor() { }


  /** Método que calcula o tamanho em bytes de uma string Base64*/
 private getBase64FileSize(base64String: string): number {

    /**Calcula o padding (preenchimento) verificando quantos caracteres = existem no final da string Base64 */
    const padding = base64String.endsWith('==') ? 2 : base64String.endsWith('=') ? 1 : 0;
    /*
    *Aplica a fórmula matemática para converter tamanho Base64 para bytes:
* Multiplica o comprimento por 3/4 (pois Base64 usa 4 caracteres para representar 3 bytes)
* Subtrai o padding (os caracteres = são apenas de preenchimento) */
    return (base64String.length * 3 / 4) - padding;
  }


  /**Método principal que recebe um arquivo de imagem e retorna um Observable com a versão comprimida em Base64 */
  compressImage(file: File | undefined ): Observable<string> {
    /**Se nenhum arquivo for fornecido, retorna um caminho para imagem padrão */
    if (!file) {
      return of('./../../../assets/img/avatar/no_avatar.png');
    }

    /**Cria um novo Observable para processamento assíncrono */
    return new Observable(observer => {
      /**Cria um FileReader para ler o conteúdo do arquivo */
      const reader = new FileReader();
      /**Define o callback quando a leitura do arquivo for concluída */
      reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
          /**Cria um canvas e seu contexto 2D para manipulação da imagem */
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');
          /**Obtém as dimensões originais da imagem */
          let width = img.width;
          let height = img.height;

          /**Redimensiona a imagem mantendo proporção se for maior que 200px em qualquer dimensão */
          if (width > 200 || height > 200) {
            const ratio = Math.min(200 / width, 200 / height);
            width = Math.floor(width * ratio);
            height = Math.floor(height * ratio);
          }

          canvas.width = width;
          canvas.height = height;
          ctx?.drawImage(img, 0, 0, width, height);
          /**Converte a imagem do canvas para Base64 com:
           * Formato JPEG *
           * Qualidade 70% (0.7) */

          const base64String = canvas.toDataURL('image/jpeg', 0.7);
          /* Calcula e loga as estatísticas de compressão*/
          const originalSize = file.size;
          const compressedSize = this.getBase64FileSize(base64String);
          const compressionRatio = (compressedSize / originalSize * 100).toFixed(2);
          console.log(`Original: ${originalSize} bytes | Compressed: ${compressedSize} bytes | Ratio: ${compressionRatio}%`);

          /**Emite a string Base64 comprimida e completa o Observable */
          observer.next(base64String);
          observer.complete();
        };
        /**Configura tratamento de erro do FileReader e inicia a leitura do arquivo */
        img.onerror = (err) => observer.error(err);
        img.src = e.target?.result as string;
      };

      reader.onerror = (err) => observer.error(err);
      reader.readAsDataURL(file);
    });
  }
}

