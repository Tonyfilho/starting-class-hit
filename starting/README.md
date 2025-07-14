# Starting

inicio do projeto
Obs: Na aula 10, foi feito update do css do Header, foi feito a responsividade
Obs: Falta fazer o template das diretivas NgFor, NgIf NgClass e outras Aula 06

# aula01

git, configurações, criação dos components body, header, main e foot

# aula02

criação do html e css dos component
onde setar o css:
style.css adcionamos os style globais
component.css
dentro da tag style={...}
no arquivo index adcionamos as fonts do projeto
feita conf. do css global no arquivo app.component.css
OBS: Inicio a ao conhecimento sobre API de rotas
1º No arquivo app.routes.ts é o local da nossa configurações globais.
2º falaremos sobre routelink="...." que fica dentro do componente header.html
temos que importar seu "Module".
Estudar JS Objetos e JS Array ou List

# Aula 03

configurar o app Main e Footer. E no Footer
instalação do LUXON npm install luxon, npm install --save-dev @types/luxon, falaremos sobre inicio de encapsulamento.
Criação construtor do ANGULAR e não JS.
Inicio a injeção de depedencia. e tipo de injeção().
Falaremos sobre injeção de depedencia usando o ROUTER como exemplo. this.router.navigate(['/hit-class/project']); this.router.navigateByUrl('/hit-class/project');
Inicio sobre interpolação {{....}} Obs: Interpolação somente para .HTML
inicio sobre Template Literals `${....}` Obs: Template Literals somente para .TS

# Aula 04

1º criação do components home, projects
2º continuação da aula sobre rotas, no arquivo app.routes.ts
3º Explicação sobre rotas comuns e loadlazy
4º Evento de (click)="....." e outros

# Aula 05

configuração do do firebase hosting : https://console.firebase.google.com/

# Aula 06 diretivas NgFor, NgIf NgClass e outras

Crianção dos componentes de nivelamento e suas tags.
Estrutura de controle

1. inicio sobre Diretiva [ngClass].
2. Ternario.
3. If e Else.
4. For of
   Operadores
5. Operador Logico (||) operador OR
6. Operador de Coalescência Nula (??)
7. Operador ternario no Ts,
8. Operador de Atribuição Condicional (?)
9. Operador de Negação (!)
10. Operador de DUPLA Negação (!!)
11. Injeção de Depedencia ou DI

# Aula 07

1. atualização do <app-header>, passando a reenderizar os components filhos.
   O header assim que passar o mouse vai mostrar as rotas filhas.

# Aula 08

1. criar os componentes e stiliza-los, Angular, Git, Nivelamento, Solid e seu components filhos
2. instrodução as rotas Filhas.
3. criação das rotas filhas, hit, leves, api, solid.

# Aula 09

1. Iniciar o Nivelamento 1
2. fazer novamente a instalação do firebase, fazer a configuração do projeto no Firebase Web e fazer o deploy
3. https://favicon.io/favicon-generator/
4. Falar de promise. Criar o component Promise
5. Falar de Observable. Criar o component observarble e operador Diamante<any>, Operadores do RxJs Of(), Pipe(), Delay() e Map(), Subscrition(), UnSubscription()
6. Falar sobre Pipe Async
7. Falar de Signal. Criar c component signal
8. iniciar Tipagem
9. Update header adicionar o link de Forms
10. Criação do Signal Service e seu componente

# Aula 10

0. Inicio do nivelamento 2, 3 e 4
1. Inicio ao conceito de Services, e criação do services, weather e reqres.in
2. Resquest em uma API, fazer o cadastro na API https://www.weatherapi.com/my/ e https://reqres.in/
3. criação do Metodo Get que retorna uma Promise e o Get que retorna um Observable.
4. cadastro no no site da APIs
5. Tabela de Errors dentro Api
6. falar sobre CORS
7. falar sobre Type e Interface, IReqres, IWeather
8. Nivelamento 02, 03
9. no app.config importar o provider do HTTPRequest , providerHttpClient();
10. gerar error http para exemplos
11. falar sobre o request, sobre devtools NETWORK / Fetch/XHR e sobre error.
12. criar components success, error 400 and error 500, update header
13. criar component reqres e fazer o seu style
14. Nivelamento 2,falar sobre Regex. No file \_shared/pipes/
15. inicio aos formularios.

# Aula 11

1. criar o componente de rota da API , bem sua rota e subscriber na api weather e regres.
2. Criação dos components firebaseInitHosting, authentication da rota filha angular/firebase e conf. do header
   Obs: Criação das paginas Pais, Angular, Firebase e What is Api, Solid update do css e html deste components.
3. inicio dos Forms para componente weather
4. inicio dos Validators e seu components
5. Criação da Rota forms e seus components
6. Continuação do nivelamento falar sobre ...SPREAD e Outros
7. estilizar todos o todos componentes, ficando somente error-https com css proprios

# Aula 12

1. inicio dos Forms para componente weather
2. inicio dos Forms para componente signIn
3. inicio dos Forms para componente signUp
4. Validators em todos forms
5. Api Crud (Principais Verbos Http)
6. criação do server popup
7. criançao do Js Fundaments e seus components e suas rotas
8. instalação do npm install html2pdf.js
9. criação do file: /src/html2pdf.d.ts com declare module 'html2pdf.js' {
   const html2pdf: any;
   export default html2pdf;
   }
10. por no ts dos modulos @ViewChild('pdfContent') content!: ElementRef;

downloadPDF() {
const options = {
filename: 'tap-guia.pdf',
image: { type: 'jpeg', quality: 0.98 },
html2canvas: { scale: 2 },
jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
};

    html2pdf().set(options).from(this.content.nativeElement).save();

} 
11. no template : a Referencia #pdfContent e <button class="home-button-pdf" (click)="downloadPDF()">📄 Download PDF</button>

# Aula 14

# Aula 15

# Aula 16

1. Atualização da versão do Angular
