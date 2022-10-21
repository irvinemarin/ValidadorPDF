import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Validadordocumentos} from './validadordocumentos';
import {ValidadordocumentosService} from './validadordocumentos.service';
import {SwalComponent} from "@sweetalert2/ngx-sweetalert2";

@Component({
  selector: 'app-validadordocumentos',
  templateUrl: './validadordocumentos.component.html',
  styleUrls: ['./validadordocumentos.component.css']
})
export class ValidadordocumentosComponent implements OnInit {

  getdocumentobase64: Validadordocumentos;
  srcBase64: any;
  titulo = "";

  @ViewChild('swallAccept') private swall: SwalComponent;

  constructor(
    private validadordocumentoservice: ValidadordocumentosService,
    private router: Router,
    private activateRouter: ActivatedRoute) {
  }

  ngOnInit(): void {

    this.activateRouter.params.subscribe((param: Params) => {
      this.cargar(param["code"]);
      // this.cargar("201500349500121700020220527093103.pdf");
    });
  }

  cargar(paramElement: any): void {

    this.validadordocumentoservice.getvalidadorpdf(paramElement).subscribe(
      (res) => {

        if (res[0].data) { //res.data must be base64 data format
          this.srcBase64 = res[0].data;
        }
      },
      (error) => {
        this.swall.swalOptions = {
          title: "Error",
          text: "Servicios no disponibles ",
          icon: "warning"
        }
        this.swall.fire();
      });

  }
}
