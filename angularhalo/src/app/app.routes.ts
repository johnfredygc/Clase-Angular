import { Routes } from '@angular/router';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { FormularioComponent } from './formulario/formulario.component';
import { MapaComponent } from './mapa/mapa.component';
import { VideoComponent } from './video/video.component';

export const routes: Routes = [
    {
        path: "bienvenido",
        component: BienvenidoComponent
    },
    {
        path: "formulario",
        component: FormularioComponent
    },
    {
        path: "mapa",
        component: MapaComponent
    },
    {
        path: "video",
        component: VideoComponent
    },
    {
        path: "",
        redirectTo: "/bienvenido",
        pathMatch: "full"
    }
];
