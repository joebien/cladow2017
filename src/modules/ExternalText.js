import React, { Component } from 'react'

export default class ExternalText extends Component {

componentDidMount(){



}

	getText = ()=>{

		return this.specText['i'+this.props.text]

	}

    specText = {
        i0:{heading:'Wheel Barrow', text:'Wheelbarrows come and go and so does this one. The very best in barrow works.'},
        i1:{heading:'Garden Tools', text:'This is text describing the latest technology in shovels and claws'},
        i2:{heading:'Saw & Hammer', text:'If a saw won\'t do it - a hammer certainly will. Get one today'},
        i3:{heading:'Super Wrench',text:'The best and coolest looking wrench in the history of wenches'},
        i4:{heading:'Micrometer',text:'This is some high tech looking thing that everyone needs'},

        i5:{heading:'Watering Can',text:'This is text describing the Mighty Water Can in full detail.'},


			//ABOUT HOVER SEQ SLIDE OUT TEXT

			i10:{heading:'Customer Service',text:'Our customer service representatives providing first rate customer service for all internal and external customers by using excellent, in-depth knowledge of company products and programs as well as communicating effectively with team members within the customer service department.'},

      i11:{heading:'Technical Expertise',text:'Decades of experience in complex, high value construction projects has enabled us to develop a specialised technical team to support these builds. Our early review process allows us to work with you to review and improve any potential design risks, identifying any issues which may occur during the build project and helping to avoid any last minute delays in design approval.'
	},

  		i12:{heading:'Retail Sales',text:'Mobile-ready technology enables us to deliver a superior in-store as well as on-line experience, satisfying omnichannel shoppers and provoding customer accounts to accomodate every shoppers needs.From small families to large sacal proffesional enterprises.'
  },

      i13:{heading:'Product Knowledge',text:'We want you to know we care, so we make sure our team has the competence to guide, direct, recommend, or select the best options or choices for you, regarding our wide range of high quality materials. We know product knowledge is vital to insure satisfied customers.'
      },

    }
	
  render(){


	return(
		<div></div>
	)
  }}


