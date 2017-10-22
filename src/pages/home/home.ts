import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ContentfulService } from '../../services/contentful.service';
import { Entry } from 'contentful';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  articles: Entry<any>[];

  constructor(public navCtrl: NavController, private contentfulService: ContentfulService) { }

  ngOnInit() {
    this.contentfulService.getArticles()
    .then(articles => this.articles = articles)
  }

}
