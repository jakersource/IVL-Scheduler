import { Component, OnInit } from '@angular/core';
import { NzButtonSize } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-scheduler-view',
  templateUrl: './scheduler-view.component.html',
  styleUrls: ['./scheduler-view.component.scss'],
})
export class SchedulerViewComponent implements OnInit {
  size: NzButtonSize = 'large';

  constructor() {}

  ngOnInit(): void {}

  panels = [
    {
      active: false,
      name: 'View details',
      disabled: false,
    },
  ];

  data = [
    {
      classTitle: 'Step',
      id: '02d63c9c-a3dd-4997-90b1-d8547476d001',
      description:
        'Choreographed routines on the step, combine this with push ups and hand weight exercises, you will leave feeling uplifted and wanting more. ',
      instructor: 'Kristen Burgi ',
      startTime: '08:45:00',
      endTime: '09:45:00',
      weekday: 'Thursday',
    },
    {
      classTitle: 'WERKIT',
      id: '07001c56-a7dd-4345-a146-343acc249fee',
      description:
        " A dance-cardio class with sass! Our bodies were made to move and groove--we use easy to follow choreography and popular music to keep you motivated, moving, and having fun! Dance Funk is for everyone. Each song and routine has its own personality and can be done at your own level and pace--we mix in interval-cardio training and body-weight strength training throughout each class--you'll feel the groove and won't stop moving! Most importantly, Dance Funk is a no judgement class, and is all about being yourself and giving you the love your body and mind deserves. Come to the class and feel the funk! ",
      instructor: 'Mary Ann',
      startTime: '09:15:00',
      endTime: '10:15:00',
      weekday: 'Tuesday',
    },
    {
      classTitle: "Barre N' Burn",
      id: '25ee5411-3a1c-4663-a9f2-cad8310bc319',
      description:
        "Takes Barre to a whole new level of toning! It's created to focus specific muscle groups, so you can really zone in and feel the burn! Body weight or add light to medium resistance training and dance elements in a high-rep count for lean, tone muscle.",
      instructor: 'Amber Little ',
      startTime: '08:00:00',
      endTime: '09:00:00',
      weekday: 'Monday',
    },
    {
      classTitle: 'High Fitness',
      id: '2d6acc53-7cb4-4979-9572-d3f334f926f4',
      description:
        'Body sculpting Fun! Easy-to-follow, choreographed interval training that alternates between intense cardio peaks and toning tracks. ',
      instructor: 'Brooke Collie & Jodie Staples ',
      startTime: '06:00:00',
      endTime: '07:00:00',
      weekday: 'Wednesday',
    },
    {
      classTitle: 'Mat Pilates',
      id: '2ff18805-9368-4f04-a621-98a6b216b833',
      description:
        'low-impact class concentrates on length, postural alignment , core emphasis.',
      instructor: 'Carissa',
      startTime: '06:00:00',
      endTime: '07:00:00',
      weekday: 'Friday',
    },
    {
      classTitle: 'WERKIT',
      id: '3181cdfb-f4f6-4e93-b1a2-f275c27dc3f1',
      description:
        "A dance-cardio class with sass! Our bodies were made to move and groove--we use easy to follow choreography and popular music to keep you motivated, moving, and having fun! Dance Funk is for everyone. Each song and routine has its own personality and can be done at your own level and pace--we mix in interval-cardio training and body-weight strength training throughout each class--you'll feel the groove and won't stop moving! Most importantly, Dance Funk is a no judgement class, and is all about being yourself and giving you the love your body and mind deserves. Come to the class and feel the funk! ",
      instructor: 'Davion Washingtion ',
      startTime: '20:00:00',
      endTime: '21:00:00',
      weekday: 'Thursday',
    },
    {
      classTitle: 'Super Shred',
      id: '33d2a7ec-4d36-4c3e-92a3-be1a3821fc0a',
      description:
        'Hit all muscle groups with super sets and plyometric moves. You will love this total body Shred. ',
      instructor: 'Shelly Rudd ',
      startTime: '09:15:00',
      endTime: '10:15:00',
      weekday: 'Monday',
    },
    {
      classTitle: 'Lift',
      id: '46a806f3-453d-493e-a15b-212a21ef0232',
      description:
        'Strong emphasis on proper form, this class will teach you the basic movements of weight training, while keeping things challenging and interactive!',
      instructor: 'Courtney Glasgow ',
      startTime: '08:00:00',
      endTime: '09:00:00',
      weekday: 'Saturday',
    },
    {
      classTitle: 'Yoga',
      id: '49503e2d-f40b-4a1f-b6d4-f60e153bb664',
      description:
        ' Vinyasa is a style of yoga characterized by stringing postures together so that you move from one to another, seamlessly, using breath.',
      instructor: 'Kristina Thompson ',
      startTime: '20:00:00',
      endTime: '21:00:00',
      weekday: 'Monday',
    },
    {
      classTitle: 'WERKIT',
      id: '69e098a1-5acd-42b2-a72c-f6ec5d898320',
      description:
        "A dance-cardio class with sass! Our bodies were made to move and groove--we use easy to follow choreography and popular music to keep you motivated, moving, and having fun! Dance Funk is for everyone. Each song and routine has its own personality and can be done at your own level and pace--we mix in interval-cardio training and body-weight strength training throughout each class--you'll feel the groove and won't stop moving! Most importantly, Dance Funk is a no judgement class, and is all about being yourself and giving you the love your body and mind deserves. Come to the class and feel the funk! ",
      instructor: 'Trina Jensen ',
      startTime: '20:00:00',
      endTime: '21:00:00',
      weekday: 'Tuesday',
    },
    {
      classTitle: "Barre N' Burn ",
      id: '8a5a07b2-4477-4301-80f8-eeb866a53514',
      description:
        'This low-impact class concentrates on length, postural alignment, muscle balance.',
      instructor: 'Kelsey Cole ',
      startTime: '06:00:00',
      endTime: '07:00:00',
      weekday: 'Tuesday',
    },
    {
      classTitle: 'Super Shred',
      id: 'b3199c41-11b6-4bc6-b998-3d6420f1e000',
      description:
        'Hit all muscle groups with super sets and plyometric moves. You will love this total body Shred. ',
      instructor: 'Shelly Rudd ',
      startTime: '06:00:00',
      endTime: '07:00:00',
      weekday: 'Thursday',
    },
    {
      classTitle: 'Power Pump',
      id: 'b5e78441-906c-467a-9720-1017852d22be',
      description:
        'Strong emphasis on proper form, this class will teach you the basic movements of weight training, while keeping things challenging and interactive! ',
      instructor: 'Heather Jenson ',
      startTime: '09:15:00',
      endTime: '10:15:00',
      weekday: 'Wednesday',
    },
    {
      classTitle: 'SURGE FIT',
      id: 'da120180-d502-4374-bbf9-c9a0b733f0b3',
      description: ' ',
      instructor: 'Montana Hansen ',
      startTime: '06:00:00',
      endTime: '07:00:00',
      weekday: 'Monday',
    },
    {
      classTitle: 'Core Pilates',
      id: 'ee309228-a2e3-4c62-b295-c819eaa43286',
      description:
        'You will love this low impact class! emphasis on body alignment ,breathing and developing a strong core.',
      instructor: 'Carissa',
      startTime: '08:00:00',
      endTime: '09:00:00',
      weekday: 'Tuesday',
    },
    {
      classTitle: 'Surge',
      id: 'f01b3ba1-0836-4f9d-9262-8e9c7b4c5fe1',
      description:
        'Energizing HIIT workout with fun cardio tracks intertwined with high-rep strength training tracks will that shape and tone your body. ',
      instructor: 'Hailey Greenwood ',
      startTime: '09:15:00',
      endTime: '10:15:00',
      weekday: 'Friday',
    },
    {
      classTitle: 'WERKIT',
      id: 'fb071cdc-b835-4169-9dd7-4fc6762c72dd',
      description:
        " A dance-cardio class with sass! Our bodies were made to move and groove--we use easy to follow choreography and popular music to keep you motivated, moving, and having fun! Dance Funk is for everyone. Each song and routine has its own personality and can be done at your own level and pace--we mix in interval-cardio training and body-weight strength training throughout each class--you'll feel the groove and won't stop moving! Most importantly, Dance Funk is a no judgement class, and is all about being yourself and giving you the love your body and mind deserves. Come to the class and feel the funk! ",
      instructor: 'Trina Jensen ',
      startTime: '09:15:00',
      endTime: '10:15:00',
      weekday: 'Saturday',
    },
  ];

  goToLink(url: string) {
    window.open(url, '_blank');
  }
}
