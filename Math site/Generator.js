//Генераторы рандомных чисел

function getRandomInt(min, max) 
{
  return Math.floor(Math.random() * (max - min) + min);
}

function randomInt(max) 
{
  return Math.floor(Math.random() * max);
}

//Поиск найбольшего общего делителя алгоритмом Евклида
function NOD(x,y)
{
	let maxi = Math.max(x,y);
	let mini = Math.min(x,y);
	if (maxi % mini != 0)
	{
		return NOD(mini,maxi%mini);
	}
	else if (maxi % mini == 0)
	{
		return mini;
	}
}
//Генератор делений
function div_gen(num)
{
	let a = randomInt(num);
	let b = randomInt(num);
	while (a%b != 0 || a == 0 || b == 0 || a == b || b == 1)
	{
		a = randomInt(num);
		b = randomInt(num);
	}
	return `${a}/${b}`;
}

//Генераторы примеров 
function gen1()
{
	let a = getRandomInt(1, 10);
	let b = getRandomInt(1, 10);
  let c = getRandomInt(1, 5);
  let d = getRandomInt(1, 5);
  let e = getRandomInt(1, 5);
	let ch = '+-';

  	let array1 = [`${Math.max(a,b)}${ch[randomInt(2)]}${Math.min(a,b)}`,
   `${c+d+e}-${c}-${d}`,`${c+d+e}+${e}-${d}`,`${c+d+e}-${e}+${d}`, `${c}+${e}+${d}`];

   return array1[randomInt(array1.length)];


}
function gen2() 
{
	let a = randomInt(21);
	let b = randomInt(21);
	let c = randomInt(21);
	let d = randomInt(21);
	let ez1 = randomInt(11);
	let ez2 = randomInt(11);
	let ez3 = randomInt(11);
  let ez4 = getRandomInt(10, 20)
  let ez5 = getRandomInt(10, 20)
  let f = getRandomInt(100, 500)
  let g = getRandomInt(100, 500)

   while (f < g) {
   f = getRandomInt(100, 500);
   }

	while (a == 0 || b == 0 || c == 0 || d == 0 ||ez1 == 0 || ez2 == 0 || ez3 == 0 || ez4 == 0 || ez5 == 0)
	{
		a = randomInt(21);
		b = randomInt(21);
		c = randomInt(21);
		d = randomInt(21);
		ez1 = randomInt(11);
		ez2 = randomInt(11);
		ez3 = randomInt(11);
    ez4 = getRandomInt(10, 20);
    ez5 = getRandomInt(10, 20);
	}
	let array1 = [`${Math.max(a,b)}-${Math.min(a,b)}+${Math.max(c,d)}-${Math.min(c,d)}`,
	`${div_gen(21)}+${a}`,
	`${a}+${div_gen(21)}`,
	`${a}*${b}-${Math.min(a,b,c,d)}`,
	`${ez1}*${ez2}*${ez3}`,
	`${ez1}*${ez2}*${ez3}+${a}`,
  `${ez1}*${ez2}*${ez3}-${Math.min(ez1,ez2,ez3,ez4)}`,
  `${ez4}*${ez5}`,
  `${f}-${g}`,
  `${f}+${g}`,
  `${a*b+getRandomInt(100, 200)}-${a}*${b}`,
  `${a*b+getRandomInt(100, 200)}+${a}*${b}`,
  `${a}*${b}+${Math.min(a,b,c,d)}`];

	return array1[randomInt(array1.length)];
}
function gen3()
{
	let a = randomInt(51);
	let b = randomInt(51);
	let c = randomInt(51);
	let d = randomInt(51);
	let e = randomInt(201);
	let ch = '+-';
	let ch2 = ['-',''];
	let array1 = [`${ch2[randomInt(2)]}(${a}${ch[randomInt(2)]}${b})*(${c}${ch[randomInt(2)]}${d})`,
	`${ch2[randomInt(2)]}${div_gen(100)}*${div_gen(100)}`,
	`${ch2[randomInt(2)]}${e}*(${ch2[randomInt(2)]}${a}${ch[randomInt(2)]}${b})`];
	return array1[randomInt(array1.length)];
}
function sum_X()
{
	let a = randomInt(50);
	let b = randomInt(50);
	let maxi = Math.max(a,b);
	let mini = Math.min(a,b);
	let array1 = [`${mini}+x=${maxi}`,`x+${mini}=${maxi}`,`${maxi}=x+${mini}`,`${maxi}=${mini}+x`,`x=${maxi-mini}`];
	return [array1[randomInt(array1.length-1)], array1[array1.length-1]];
}
function sub_x1()
{
	let a = randomInt(50);
	let b = randomInt(50);
	let array1 = [`x-${a}=${b}`,`${b}=x-${a}`,`x=${a+b}`];
	return [array1[randomInt(array1.length-1)], array1[array1.length-1]];
}
function sub_x2()
{
	let a = randomInt(50);
	let b = randomInt(50);
	let maxi = Math.max(a,b);
	let mini = Math.min(a,b);
	let array1 = [`${maxi}-x=${mini}`,`${mini}=${maxi}-x`,`x=${maxi-mini}`];
	return [array1[randomInt(array1.length-1)], array1[array1.length-1]];
}
function mult_x()
{
	let a = randomInt(82);
	let b = randomInt(82);
	while (b%a != 0 || a == 0 || b == 0 || b == 1 || a == b)
	{
		b = randomInt(82);
		a = randomInt(82);
	}
	let array1 = [`x*${a}=${b}`,`${a}*x=${b}`,`${b}=x*${a}`,`${b}=${a}*x`,`x=${b/a}`];
	return [array1[randomInt(array1.length-1)], array1[array1.length-1]];
}
function div_x1() 
{
	let a = randomInt(82);
	let b = randomInt(82);
	while (a%b != 0 || a == 0 || b == 0 || b == 1 || a == b)
	{
		a = randomInt(82);
		b = randomInt(82);
	}
	let array1 = [`x/${a}=${b}`,`${b}=x/${a}`,`x=${a*b}`];
	return [array1[randomInt(array1.length-1)], array1[array1.length-1]];
}
function div_x2()
{
	let a = randomInt(82);
	let b = randomInt(82);
	while (a%b != 0 || a == 0 || b == 0 || b == 1 || a == b)
	{
		a = randomInt(82);
		b = randomInt(82);
	}
	let maxi = Math.max(a,b);
	let mini = Math.min(a,b);
	let array1 = [`${maxi}/x=${mini}`,`${mini}=${maxi}/x`,`x=${maxi/mini}`];
	return [array1[randomInt(array1.length-1)], array1[array1.length-1]];
}
function gen4()
{
	let array1 = [sum_X, sub_x1, sub_x2, mult_x, div_x1, div_x2];
	return array1[randomInt(array1.length)]();
}
function gen5()
{
	let k = randomInt(10);
	let sq = randomInt(10);
	let num = randomInt(20);
	let kor = randomInt(6);
	let k2 = randomInt(6);
	while (k == 0 || sq == 0 || num == 0 || kor == 0 || k2 == 0 || k == 1 || sq == 1 || num == 1 || kor == 1 || k2 == 1)
	{
		k = randomInt(10);
		sq = randomInt(10);
		num = randomInt(20);
		kor = randomInt(6);
		k2 = randomInt(6);
	}
	let array1 =
	[ 
		[`(${k}x+${num})²`,`=${k**2}x²+${2*k*num}x+${num**2}`],
		[`(${k}x-${num})²`,`=${k**2}x²-${2*k*num}x+${num**2}`],
		[`${k**2}x²-${sq**2}`,`=(${k}x+${sq})*(${k}x-${sq})`],
		[`${k2**3}x³+${kor**3}`,`=(${k2}x+${kor})*(${k2**2}x²-${k2*kor}x+${kor**2})`],
		[`${k2**3}x³-${kor**3}`,`=(${k2}x-${kor})*(${k2**2}x²+${k2*kor}x+${kor**2})`],
		[`(${k2}x+${kor})³`,`=${k2**3}x³+${3*k2**2*kor}x²+${3*k2*kor**2}x+${kor**3}`],
		[`(${k2}x+${kor})³`,`=${k2**3}x³+${3*k2**2*kor}x²+${3*k2*kor**2}x+${kor**3}`]

	];
	return array1[randomInt(array1.length)];
}
function gen6()
{
	//Генерация квадратного уравнения
	let ch2 = ['-',''];
	let a = 0;
	let b = 0;
	let c = 0;
	let d = b**2-4*a*c;
	while (Math.sqrt(d)%1 != 0 || a == 0 || b == 0 || c == 0 || d > 400)
	{
		a = parseInt(`${ch2[randomInt(2)]}${randomInt(21)}`);
		b = parseInt(`${ch2[randomInt(2)]}${randomInt(21)}`);
		c = parseInt(`${ch2[randomInt(2)]}${randomInt(21)}`);
		d = b**2-4*a*c;
	}
	//Превращение x1 в обычную дробь если это не целое число
	let x1 = (-b + Math.sqrt(d) ) / (2 * a);
	let nod_x1 = NOD(Math.abs(-b + Math.sqrt(d)),Math.abs(2*a));
	if (Math.abs(x1%1) != 0)
	{
		if (-b + Math.sqrt(d) < 0 && (2*a) < 0)
		{
			x1 = `${Math.abs(-b + Math.sqrt(d))/nod_x1}/${Math.abs(2*a)/nod_x1}`;
		}	
		else if (2*a < 0)
		{
			x1 = `-${(-b + Math.sqrt(d))/nod_x1}/${Math.abs(2*a)/nod_x1}`;
		}
		else 
		{
			x1 = `${(-b + Math.sqrt(d))/nod_x1}/${2*a/nod_x1}`;
		}
	}	
	//Превращение x2 в обычную дробь если это не целое число
	let x2 = (-b - Math.sqrt(d) ) / (2 * a);
	let nod_x2 = NOD(Math.abs(-b - Math.sqrt(d)),Math.abs(2*a));	
	if (Math.abs(x2%1) != 0)
	{
		if (-b - Math.sqrt(d) < 0 && (2*a) < 0)
		{
			x2 = `${Math.abs(-b - Math.sqrt(d))/nod_x2}/${Math.abs(2*a)/nod_x2}`;
		}	
		else if (2*a < 0)
		{
			x2 = `-${(-b - Math.sqrt(d))/nod_x2}/${Math.abs(2*a)/nod_x2}`;
		}
		else 
		{
			x2 = `${(-b - Math.sqrt(d))/nod_x2}/${2*a/nod_x2}`;
		}
	}
	//Сбор квадратного уравнения
	let pr_a = '';
	let pr_b = '';
	let pr_c = '';
	switch(a)
	{
		case 1:
			pr_a = 'x²';
			break;
		case -1:
			pr_a = '-x²';
			break;
		default:
			pr_a = `${a}x²`;
			break; 
	}
	switch(b)
	{
		case 1:
			pr_b = '+x';
			break;
		case -1:
			pr_b = '-x';
			break;
		default:
			if (b > 0)
			{
				pr_b = `+${b}x`;
				break;
			}
			else 
			{
				pr_b = `${b}x`;
				break;
			}
	}
	if (c > 0)
	{
		pr_c = `+${c}=0`;
	}
	else
	{
		pr_c = `${c}=0`;
	}
	let primer = pr_a+pr_b+pr_c;
	if(d == 0)
	{
		return [primer,`x=${x1}`];
	}
	else 
	{
		return [primer, `x₁=${x1} x₂=${x2}`];
	}
}
//Список для хранения генераторов примеров
var generator_list = [gen1, gen2, gen3, gen4,gen5,gen6];

//Функция клика
export function event(num)
{
	let gener = generator_list[num-1]();
	switch(num)
	{
		case 4:
		case 5:
		case 6:
			document.getElementById(`genn${num}`).textContent = `${gener[0]}`;
			document.getElementById(`answer${num}`).textContent = `${gener[1]}`;
			break;
		default:
			document.getElementById(`genn${num}`).textContent = `${gener}`;
			document.getElementById(`answer${num}`).textContent = `=${eval(gener)}`;
			break;
	}
}

//Функция показа ответа
export function answer(num)
{
	if(document.getElementById(`answer${num}`).hidden == true)
	{
		document.getElementById(`answer${num}`).hidden = false;
	}
	else document.getElementById(`answer${num}`).hidden = true;
}