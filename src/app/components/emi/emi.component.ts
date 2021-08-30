import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emi',
  templateUrl: './emi.component.html',
  styleUrls: ['./emi.component.css']
})
export class EMIComponent implements OnInit {

  ngOnInit(): void {

    $("#calc").click(function () {


      var p = Number($('#amt').val());

      var t = Number($('#year').val()) * 12;

      var r = Number($('#year').val()) / 1200;
      let a = Math.pow((1 + r), t);
      let b = (Math.pow((1 + r), t) - 1)
      let emi = p * r * a / b;
      emi = Math.round(emi);
      


      $('#results').text("" + emi + " per month.");

      $("#span").css("display", "block");


    });
    $('#calc').dblclick(() => {
      $('#span').toggle();
    });
  }

}