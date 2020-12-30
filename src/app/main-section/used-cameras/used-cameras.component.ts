import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-used-cameras',
  templateUrl: './used-cameras.component.html',
  styleUrls: ['./used-cameras.component.css']
})
export class UsedCamerasComponent implements OnInit {
  mediaCollection = [{
    gallery: {
      cover: "https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_1280.jpg",
      all: [{
          url: "https://cdn.pixabay.com/photo/2017/02/01/22/02/mountain-landscape-2031539_1280.jpg"
        }, {
          url: "https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_1280.jpg"
      }]
    },
    paymentPending: false,
    paymentInfo: {},
    ownerName: "Another User",
    someId: "PS2020BGLR001",
    model: "Nikon D705",
    contact: "+91-8576354743",
    address: "Banglore"
  }, {
    gallery: {
      cover: "https://cdn.pixabay.com/photo/2017/02/01/22/02/mountain-landscape-2031539_1280.jpg",
      all: [{
          url: "https://cdn.pixabay.com/photo/2017/02/01/22/02/mountain-landscape-2031539_1280.jpg"
        }, {
          url: "https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_1280.jpg"
      }]
    },
    paymentPending: false,
    paymentInfo: {},
    ownerName: "Siddaya Swami",
    someId: "PS2020BGLR001",
    model: "Nikon D705",
    contact: "+91-8576354743",
    address: "Banglore"
  }, {
    gallery: {
      cover: "https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_1280.jpg",
      all: [{
          url: "https://cdn.pixabay.com/photo/2017/02/01/22/02/mountain-landscape-2031539_1280.jpg"
        }, {
          url: "https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_1280.jpg"
      }]
    },
    paymentPending: false,
    paymentInfo: {},
    ownerName: "Another User",
    someId: "PS2020BGLR001",
    model: "Nikon D705",
    contact: "+91-8576354743",
    address: "Banglore"
  }, {
    gallery: {
      cover: "https://cdn.pixabay.com/photo/2017/02/01/22/02/mountain-landscape-2031539_1280.jpg",
      all: [{
          url: "https://cdn.pixabay.com/photo/2017/02/01/22/02/mountain-landscape-2031539_1280.jpg"
        }, {
          url: "https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_1280.jpg"
      }]
    },
    paymentPending: false,
    paymentInfo: {},
    ownerName: "Siddaya Swami",
    someId: "PS2020BGLR001",
    model: "Nikon D705",
    contact: "+91-8576354743",
    address: "Banglore"
  }, {
    gallery: {
      cover: "https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_1280.jpg",
      all: [{
          url: "https://cdn.pixabay.com/photo/2017/02/01/22/02/mountain-landscape-2031539_1280.jpg"
        }, {
          url: "https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_1280.jpg"
      }]
    },
    paymentPending: false,
    paymentInfo: {},
    ownerName: "Another User",
    someId: "PS2020BGLR001",
    model: "Nikon D705",
    contact: "+91-8576354743",
    address: "Banglore"
  }, {
    gallery: {
      cover: "https://cdn.pixabay.com/photo/2017/02/01/22/02/mountain-landscape-2031539_1280.jpg",
      all: [{
          url: "https://cdn.pixabay.com/photo/2017/02/01/22/02/mountain-landscape-2031539_1280.jpg"
        }, {
          url: "https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_1280.jpg"
      }]
    },
    paymentPending: false,
    paymentInfo: {},
    ownerName: "Siddaya Swami",
    someId: "PS2020BGLR001",
    model: "Nikon D705",
    contact: "+91-8576354743",
    address: "Banglore"
  }, {
    gallery: {
      cover: "https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_1280.jpg",
      all: [{
          url: "https://cdn.pixabay.com/photo/2017/02/01/22/02/mountain-landscape-2031539_1280.jpg"
        }, {
          url: "https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_1280.jpg"
      }]
    },
    paymentPending: false,
    paymentInfo: {},
    ownerName: "Another User",
    someId: "PS2020BGLR001",
    model: "Nikon D705",
    contact: "+91-8576354743",
    address: "Banglore"
  }];   
  constructor() { }

  ngOnInit(): void {
  }

  onSearch(e)  {
    console.log(e);
    
  }
}
