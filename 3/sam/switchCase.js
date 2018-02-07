const switchFunc = (x) => {
  switch(x) {
    case x = 1:
      console.log('one');
      return true;
    case x = 2:
      console.log('two');
      return false;
    default:
      console.log('nothing provided');
      break;
  }
}

switchFunc(1);
switchFunc(2);
switchFunc();
