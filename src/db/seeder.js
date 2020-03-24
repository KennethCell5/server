import Famous from '../models/Famous';

const famous_list = [
  {
    firstname: 'Ribert',
    lastname: 'Downey Jr.',
    biography:
      'Robert John Downey Jr. is an American actor, producer, and singer. His career has been characterized by critical and popular success in his youth, followed by a period of substance abuse and legal troubles, before a resurgence of commercial success in middle age.',
    dob: 'April 4, 1965'
  },
  {
    firstname: 'Brad',
    lastname: 'Pitt',
    biography:
      'William Bradley Pitt is an American actor and film producer. He has received multiple awards, including two Golden Globe Awards and an Academy Award for his acting, in addition to another Academy Award and a Primetime Emmy Award as producer under his production company, Plan B Entertainment.',
    dob: 'December 18, 1963'
  },
  {
    firstname: 'Albert',
    lastname: 'Einstein',
    biography:
      'Albert Einstein was a German-born theoretical physicist who developed the theory of relativity, one of the two pillars of modern physics. His work is also known for its influence on the philosophy of science..',
    dob: 'March 14, 1879'
  },
  {
    firstname: 'Thomas',
    lastname: 'Edisn',
    biography:
      "Thomas Alva Edison was an American inventor and businessman who has been described as America's greatest inventor. He developed many devices in fields such as electric power generation, mass communication, sound recording, and motion pictures..",
    dob: 'April 4, 1965'
  },
  {
    firstname: 'Russell',
    lastname: 'Vitale',
    biography:
      "Better known by his stage name Russ, is an American rapper, singer, songwriter, author and record producer. He is known for his singles 'What They Want' and 'Losin Control', which peaked respectively at number 83 and 63 on the US Billboard Hot 100. ",
    dob: 'September 26, 1992'
  }
];

export default {
  famous: () => {
    // Clear Collection
    Famous.remove({});
    // Insert Item to Collection
    famous_list.map(item => {
      Famous.insert(item);
    });
  }
};
