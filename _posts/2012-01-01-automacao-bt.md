---
title: "Automação BT"
categories:
  - Projects
tags:
  - Arduino
  - 8051
  - Bluetooth
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/BvfBnr6wuxY" frameborder="0" allowfullscreen></iframe>
<br/>
Este foi meu primeiro projeto com Arduino e meu último apresentado no curso Técnico em Eletrônica Industrial, em 2012.
  
<!-- Tinha acabado de comprar meu primeiro Arduino (o Duemilanove) e queria aplicá-lo em algum projeto. Como o uso do microcontrolador 8051 era obrigatório, juntei as duas plataformas: este cuidava do LCD e o Arduino controlava os servo-motores e fazia a comunicação com o módulo bluetooth. A interface entre os microcontroladores era via UART. <br> -->

Esta maquete recebeu o primeiro lugar da XV Feira de Projetos dos cursos Técnicos da Faculdade de Tecnologia Ensitec.

Plataformas:

* **AT89S51**: Assembly, LCD 16x2, UART
* **Arduino**: Wiring, ADC, Servo, Software Serial, HC-05
* **Mobile Processing**: Bluetooth Serial

Abaixo, dois exemplos de código:

* **automacao-bt.asm**: move o dado recebido na UART para o acumulador do AT89S51
* **automacao-bt.pde**: envia via bluetooth o valor da tecla pressionada

{% gist wsilverio/c0df06f63ce32ff122254eecc5ac1524 automacao-bt.asm %}

{% gist wsilverio/65121bcf9f232d214dfcd0caf1126945 automacao-bt.pde %}
