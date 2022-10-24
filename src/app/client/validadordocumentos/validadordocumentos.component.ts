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
  nombreFile = "DocumentoPrueba.pdf";
  actions_zoom = 1

  constructor(
    private validadordocumentoservice: ValidadordocumentosService,
    private router: Router,
    private activateRouter: ActivatedRoute) {
  }

  ngOnInit(): void {

    this.activateRouter.params.subscribe((param: Params) => {
      if (param["code"]) this.cargar(param["code"]);
      else this.titulo = "404 no found"
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

  PrintFilePDf() {
    const linkSource = this.srcBase64;
    const downloadLink = document.createElement("a");
    const fileName = this.nombreFile;
    downloadLink.href = linkSource;
    downloadLink.download = fileName;
    downloadLink.click();
  }

  changeZoom(count: string) {
    if (count == "1")
      this.actions_zoom++;

    if (count == "-1" && this.actions_zoom > 1)
      this.actions_zoom--;
  }

  isMoreSizeMD() {
    return window.innerWidth > 670;
  }
}
