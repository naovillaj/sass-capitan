'use strict';

const render = (root) => {
  root.empty();
  const wrapper = $('<ol class="wrapper"></ol>');
  
  root.append(wrapper);


  $.each(state.lista, function(index, element){
    console.log(element);
    const lista = $("<li class='lista'>" + element.name + " " + element.pLastName+ "  " + "</li>");
    const title = $("<input type='checkbox'>");
    lista.append(title);
    wrapper.append(lista); 
    // return lista;
  });
}

const state = {
  lista: null,  
};

// $(document).ready(function(){
  $.getJSON('http://laboratoria.cuadra.co:9339/api/v1/students/', function(result){

  state.lista = result;
  console.log(state.lista);    
  const root = $('#root');
  render(root);
  }); 

  // });


