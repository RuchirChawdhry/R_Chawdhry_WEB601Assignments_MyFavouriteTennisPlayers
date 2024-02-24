import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Content } from '../helper-files/content-interface';
import {ContentCardComponent} from '../content-card/content-card.component';
import {FilterTypePipe} from '../filter-type.pipe';

@Component({
  selector: 'app-content-list',
  standalone: true,
  imports: [CommonModule, ContentCardComponent, FilterTypePipe, FormsModule],
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent {
  contentArray: Content[] = [
    {
      id: 1,
      title: "Roger Federer",
      description: "Roger Federer is a Swiss professional tennis player who is considered one of the greatest tennis players of all time. With 20 Grand Slam singles titles, his grace on court and effortless play have delighted fans worldwide. Federer is known for his precise serve, powerful forehand, and exceptional movement.",
      nationality: "Swiss",
      imgURL: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/07/06/21/roger-federer.jpg",
      type: "All-Court Player",
      tags: ["Swiss", "Grand Slam", "Elegance"],
    },
    {
      id: 2,
      title: "Serena Williams",
      description: "Serena Williams, an American professional tennis player, has dominated women's tennis with her powerful game, winning 23 Grand Slam singles titles. Her strength, powerful serve, and resilience on the court have made her one of the sport's most formidable competitors.",
      nationality: "American",
      imgURL: "https://wp.usatodaysports.com/wp-content/uploads/sites/90/2016/09/afp_afp_fw38b_84953690.jpg",
      type: "Power Baseline Player",
      tags: ["American", "Powerful", "Champion"],
    },
    {
      id: 3,
      title: "Rafael Nadal",
      description: "Rafael Nadal, known as the 'King of Clay,' is a Spanish professional tennis player famous for his unmatched dominance on clay courts. With 22 Grand Slam singles titles, his fighting spirit, incredible athleticism, and tenacity set him apart from his rivals.",
      nationality: "Spanish",
      imgURL: "https://i1.wp.com/lopezdoriga.com/wp-content/uploads/2016/10/rafael-nadal-beat-lucas-pouille-to-reach-third-round-in-monte-carlo-5.jpg",
      type: "Clay Court Specialist",
      tags: ["Spanish", "Clay", "Fighter"],
    },
    {
      id: 4,
      title: "Novak Djokovic",
      description: "Novak Djokovic, a Serbian professional tennis player, has won numerous Grand Slam singles titles with his exceptional all-court game. Known for his incredible flexibility and mental toughness, Djokovic has spent more weeks at number one in the ATP rankings than any other player.",
      nationality: "Serbian",
      imgURL: "https://images.prismic.io/fft-rg-commun-news/ff8c07766ee14cbd0726d55ecbaa2cbd4e9fc124_noletrophee.jpg",
      type: "All-Court Player",
      tags: ["Serbian", "Flexibility", "No.1"],
    },
    {
      id: 5,
      title: "Naomi Osaka",
      description: "Naomi Osaka is a professional tennis player representing Japan. She has made headlines not only for her powerful play and multiple Grand Slam titles but also for her activism and influence off the court. Osaka's powerful serve and aggressive baseline play are key to her success.",
      nationality: "Japanese",
      imgURL: "https://media.vanityfair.com/photos/621d0baf7bd95cb166e1a408/master/w_2560%2Cc_limit/naomi-osaka-tennis-2022.jpg",
      type: "Hard Court Specialist",
      tags: ["Japanese", "Powerful", "Activist"],
    },
    {
      id: 6,
      title: "Steffi Graf",
      description: "Steffi Graf is a retired German tennis player who was ranked world No. 1 and won 22 Grand Slam singles titles. Known for her powerful forehand and quick footwork, Graf is considered one of the greatest tennis players of all time.",
      nationality: "German",
      imgURL: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/steffi-graf-simon-bruty.jpg",
      type: "All-Court Player",
      tags: ["German", "Forehand", "Legend"],
    },
    {
      id: 7,
      title: "Venus Williams",
      description: "Venus Williams, an American professional tennis player, has been credited with ushering in a new era of power and athleticism on the women's professional tennis tour. With multiple Grand Slam singles titles, she is known for her powerful serve and athletic play.",
      nationality: "American",
      imgURL: "https://www.telegraph.co.uk/content/dam/fashion/2018/06/26/TELEMMGLPICT000167618534_trans_NvBQzQNjv4Bqx1rGucoo2J_ExhuM2sOt-5Dg7ACGJPdPR4xgCzbOV8A.jpeg",
      type: "Power Baseline Player",
      tags: ["American", "Power", "Athleticism"],
    },
        {
      id: 8,
      title: "Andy Murray",
      description: "Andy Murray is a British professional tennis player known for his remarkable comeback from injury and his victories in three Grand Slam tournaments. His defensive play and ability to convert defense into offense have made him a formidable opponent on all surfaces.",
      nationality: "British",
      imgURL: "https://www.shropshirestar.com/resizer/yB6gltzLbzKv_s-LoTyU7cFTj9s=/1200x0/cloudfront-us-east-1.images.arcpublishing.com/mna/QUN3NWBIBRHCVADFJ2DSJH22FI.jpg",
      type: "Counterpuncher",
      tags: ["British", "Grand Slam", "Comeback"],
    },
  ];

    //


  filterContent: Content[] = [];
  title:string = '';
  message: string = '';
  isFound: boolean = false;

  checkTitle(){
    this.filterContent = this.contentArray.filter(item => item.title.toLowerCase() === this.title.toLowerCase());

    this.isFound = this.filterContent.length > 0;
    
    this.message = this.isFound ? `Content with title '${this.title}' found.` : `Content with title '${this.title}' not found.`;
  }

  constructor(){

  }
}
