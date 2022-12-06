import { Component, OnInit } from '@angular/core';
import { dataMock } from '../model/dataMock.model';

@Component({
  selector: 'app-info-about-sportsman',
  templateUrl: './info-about-sportsman.component.html',
  styleUrls: ['./info-about-sportsman.component.css']
})



export class InfoAboutSportsmanComponent implements OnInit {

  constructor() { }

  
  People: dataMock[] = [
    {
        ID: 1,
        lastName: "Laure",
        firstName: "Antony",
        DOB: new Date(1995, 11, 17),
        sex: "male",
        email: ""
    },
    {
        ID: 2,
        lastName: "Manama",
        firstName: "Devid",
        DOB: new Date(1997, 7, 21),
        sex: "male",
        email: ""
    },
    {
        ID: 3,
        lastName: "Frederica",
        firstName: "Carolina",
        DOB: new Date(1995, 1, 25),
        sex: "female",
        email: ""
    },
    {
        ID: 4,
        lastName: "Prolient",
        firstName: "Marry",
        DOB: new Date(1986, 2, 26),
        sex: "female",
        email: ""
    },
    {
        ID: 5,
        lastName: "Migel",
        firstName: "Mario",
        DOB: new Date(1956, 4, 33),
        sex: "male",
        email: ""
    },
    {
      ID: 1,
      lastName: "Laure",
      firstName: "Antony",
      DOB: new Date(1995, 11, 17),
      sex: "male",
      email: ""
  },
  {
      ID: 2,
      lastName: "Manama",
      firstName: "Devid",
      DOB: new Date(1997, 7, 21),
      sex: "male",
      email: ""
  },
  {
      ID: 3,
      lastName: "Frederica",
      firstName: "Carolina",
      DOB: new Date(1995, 1, 25),
      sex: "female",
      email: ""
  },
  {
      ID: 4,
      lastName: "Prolient",
      firstName: "Marry",
      DOB: new Date(1986, 2, 26),
      sex: "female",
      email: ""
  },
  {
      ID: 5,
      lastName: "Migel",
      firstName: "Mario",
      DOB: new Date(1956, 4, 33),
      sex: "male",
      email: ""
  },
  {
    ID: 1,
    lastName: "Laure",
    firstName: "Antony",
    DOB: new Date(1995, 11, 17),
    sex: "male",
    email: ""
},
{
    ID: 2,
    lastName: "Manama",
    firstName: "Devid",
    DOB: new Date(1997, 7, 21),
    sex: "male",
    email: ""
},
{
    ID: 3,
    lastName: "Frederica",
    firstName: "Carolina",
    DOB: new Date(1995, 1, 25),
    sex: "female",
    email: ""
},
{
    ID: 4,
    lastName: "Prolient",
    firstName: "Marry",
    DOB: new Date(1986, 2, 26),
    sex: "female",
    email: ""
},
{
    ID: 5,
    lastName: "Migel",
    firstName: "Mario",
    DOB: new Date(1956, 4, 33),
    sex: "male",
    email: ""
},
{
  ID: 1,
  lastName: "Laure",
  firstName: "Antony",
  DOB: new Date(1995, 11, 17),
  sex: "male",
  email: ""
},
{
  ID: 2,
  lastName: "Manama",
  firstName: "Devid",
  DOB: new Date(1997, 7, 21),
  sex: "male",
  email: ""
},
{
  ID: 3,
  lastName: "Frederica",
  firstName: "Carolina",
  DOB: new Date(1995, 1, 25),
  sex: "female",
  email: ""
},
{
  ID: 4,
  lastName: "Prolient",
  firstName: "Marry",
  DOB: new Date(1986, 2, 26),
  sex: "female",
  email: ""
},
{
  ID: 5,
  lastName: "Migel",
  firstName: "Mario",
  DOB: new Date(1956, 4, 33),
  sex: "male",
  email: ""
},
{
  ID: 1,
  lastName: "Laure",
  firstName: "Antony",
  DOB: new Date(1995, 11, 17),
  sex: "male",
  email: ""
},
{
  ID: 2,
  lastName: "Manama",
  firstName: "Devid",
  DOB: new Date(1997, 7, 21),
  sex: "male",
  email: ""
},
{
  ID: 3,
  lastName: "Frederica",
  firstName: "Carolina",
  DOB: new Date(1995, 1, 25),
  sex: "female",
  email: ""
},
{
  ID: 4,
  lastName: "Prolient",
  firstName: "Marry",
  DOB: new Date(1986, 2, 26),
  sex: "female",
  email: ""
},
{
  ID: 5,
  lastName: "Migel",
  firstName: "Mario",
  DOB: new Date(1956, 4, 33),
  sex: "male",
  email: ""
},
{
  ID: 1,
  lastName: "Laure",
  firstName: "Antony",
  DOB: new Date(1995, 11, 17),
  sex: "male",
  email: ""
},
{
  ID: 2,
  lastName: "Manama",
  firstName: "Devid",
  DOB: new Date(1997, 7, 21),
  sex: "male",
  email: ""
},
{
  ID: 3,
  lastName: "Frederica",
  firstName: "Carolina",
  DOB: new Date(1995, 1, 25),
  sex: "female",
  email: ""
},
{
  ID: 4,
  lastName: "Prolient",
  firstName: "Marry",
  DOB: new Date(1986, 2, 26),
  sex: "female",
  email: ""
},
{
  ID: 5,
  lastName: "Migel",
  firstName: "Mario",
  DOB: new Date(1956, 4, 33),
  sex: "male",
  email: ""
},
{
  ID: 1,
  lastName: "Laure",
  firstName: "Antony",
  DOB: new Date(1995, 11, 17),
  sex: "male",
  email: ""
},
{
  ID: 2,
  lastName: "Manama",
  firstName: "Devid",
  DOB: new Date(1997, 7, 21),
  sex: "male",
  email: ""
},
{
  ID: 3,
  lastName: "Frederica",
  firstName: "Carolina",
  DOB: new Date(1995, 1, 25),
  sex: "female",
  email: ""
},
{
  ID: 4,
  lastName: "Prolient",
  firstName: "Marry",
  DOB: new Date(1986, 2, 26),
  sex: "female",
  email: ""
},
{
  ID: 5,
  lastName: "Migel",
  firstName: "Mario",
  DOB: new Date(1956, 4, 33),
  sex: "male",
  email: ""
}
]
  ngOnInit(): void {
  }

  customizeColumns(columns: any): void {
    columns[0].width = 70;
  }

}
