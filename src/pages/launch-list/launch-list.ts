import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SpaceXApiProvider } from '../../providers/space-x-api/space-x-api';
import { Launch } from '../../models/launchs/Launch';
import { LaunchDetailPage } from '../launch-detail/launch-detail';

/**
 * Generated class for the LaunchListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-launch-list',
  templateUrl: 'launch-list.html',
})
export class LaunchListPage {

  launches: Launch[];

  constructor(private navCtrl: NavController, 
    private navParams: NavParams,
    private spaceXService: SpaceXApiProvider) {
      this.spaceXService.getAllLaunches().subscribe(data => {
        this.launches = data;
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LaunchListPage');
  }

  openLaunchDetail(launch: Launch) {
    this.navCtrl.push(LaunchDetailPage, {data: launch});
  }

}
