function toggleSection(section){
  let para = document.getElementById(section);
  let sectionsArray = [
    'para-info',
    'para-interest',
    'para-job',
    'para-profiles', 
    'para-project'
  ];
  let newArray = [];

  switch (para.style.display){
    case 'grid':
      para.style.display = 'none';
      break;
    case 'none':
    default:
      para.style.display = 'grid';
  }

  sectionsArray.forEach(element => {
    if (element != section) newArray.push(element);
  })
  newArray.forEach(element => {
    document.getElementById(element).style.display = 'none';
  })
}