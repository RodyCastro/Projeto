function toggleMode() {
  const html = document.documentElement

  // if(html.classList.contains('light')) {
  //   html.classList.remove('light')
  // } else {
  //   html.classList.add('light')
  // }
  // podemos utilizar das duas formas, sendo a primeira mais complexa e a segunda sendo mais simples
  
  html.classList.toggle('light')
}