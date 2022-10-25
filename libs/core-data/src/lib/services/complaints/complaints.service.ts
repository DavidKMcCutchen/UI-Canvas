import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Complaint } from '@marilias-page/api-interfaces';
import { Observable } from 'rxjs';

const BASE_URL = 'http://localhost:3000';
const MODEL = 'complaints';


@Injectable({
  providedIn: 'root'
})
export class ComplaintsService {

  constructor(
    private http: HttpClient
  ) { }

  getComplaint(complaintId: string): Observable<Complaint> {
    return this.http.get<Complaint>(this.getUrlById(complaintId));
  };

  getAllComplaints(): Observable<Complaint[]> {
    return this.http.get<Complaint[]>(this.getUrl());
  };

  updateComplaint(complaintId: string): Observable<Complaint> {
    return this.http.put<Complaint>(this.getUrlById(complaintId), {});
  };

  deleteComplaint(complaintId: string): Observable<Complaint> {
    return this.http.delete<Complaint>(this.getUrlById(complaintId));
  };

  private getUrl() {
    return `${BASE_URL}/${MODEL}`;
  };

  private getUrlById(id) {
    return `${this.getUrl()}/${id}`;
  };
}
