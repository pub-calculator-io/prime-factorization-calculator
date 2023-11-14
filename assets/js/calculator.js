function calculate(){
  // 1. init & validate
  const showAllFactors = input.get('all_factors').checked().raw();
  let number = input.get('number').natural().val();
  if(!input.valid()) return;

  // 2. calculate
  const allFactors = [];
  const factorPairs = [];
  const s = math.fix(math.sqrt(number));
  let n = 1;
  while(n <= s){
    if(number % n == 0){
      factorPairs.push([n, number / n]);
    }
    n++;
  }
  factorPairs.forEach(pair => {
    if(pair[0] == pair[1]){
      allFactors.push(pair[0]);
    } else {
      allFactors.push(pair[0], pair[1]);
    }
  });
  math.sort(allFactors);
  
  const primeFactors = []; // of {n,count}
  n = 2;
  while(n <= number){
    let count = 0;
    while(number % n == 0){
      number = number / n;
      count++;
    }
    if(count > 0){
      primeFactors.push({n,count});
    }
    n++;
  }
  const factorizationResult = primeFactors.reduce((result,item)=>result.concat(Array(item.count).fill(item.n)),[]);
  const exponentialResult = primeFactors.map(item=>`${item.n}<sup>${item.count}</sup>`);
  
  // 3. output 
  _('show_all_factors').classList[showAllFactors?'remove':'add']('hidden');
  _('result_all_factors').innerHTML = allFactors.join(', ');
  _('result_prime_factorization').innerHTML = factorizationResult.join(' x ');
  _('result_csv').innerHTML = factorizationResult.join(', ');
  _('result_exponential').innerHTML = exponentialResult.join(' x ');
}