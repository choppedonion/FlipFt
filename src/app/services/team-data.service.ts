import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {Product} from "../models/Product.model";

@Injectable({
  providedIn: 'root'
})
export class TeamDataService {
  private equipeUrl = 'http://localhost:3000/equipes';
  private produitsUrl = 'http://localhost:3000/produits';

  constructor(private http: HttpClient) {}

  getEquipes(): Observable<any[]> {
    return this.http.get<any[]>(this.equipeUrl);
  }

  getEquipeById(id: string): Observable<any> {
    return this.http.get<any>(`${this.equipeUrl}/${id}`);
  }

  getProduitsById(id: string): Observable<any> {
    return this.http.get<any>(`${this.produitsUrl}/${id}`);
  }

  getProduitsByEquipeId(equipeId: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.produitsUrl}?equipeId=${equipeId}`);
  }

  addProductToTeam(teamId: string, newProduct: Product): Observable<any> {
    console.log('Adding product to team:', newProduct);
    return this.http.post<any[]>(this.produitsUrl, newProduct);
  }

  getNombreProduitsByEquipeId(equipeId: string): Observable<number> {
    return this.http.get<any[]>(`${this.produitsUrl}?equipeId=${equipeId}`).pipe(
      map(produits => produits.length)
    );
  }
}
