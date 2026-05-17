// PCK道場 Data Layer v2.0 — 問題32問 / レッスン32個
"use strict";

// ============================================================
//  PROBLEMS (32問)
// ============================================================
const PROBLEMS = [
  /* ===== ★基礎 diff:1 ===== */
  {
    id:'p2025_1',year:2025,num:1,title:'サーバの負荷予測',points:1,diff:1,cat:'math',
    tags:['算術','入出力'],
    desc:'定常負荷A、追加負荷B、ユーザ数Xが与えられる。総負荷 A+B×X を求めよ。',
    inputDesc:'1行にA(1≤A≤10000)、B(1≤B≤1000)、X(0≤X≤1000)。',
    outputDesc:'総負荷を1行に出力。', formula:'総負荷 = A + B × X',
    examples:[{input:'1500 5 200',output:'2500'},{input:'3000 12 850',output:'13200'}],
    hints:['A + B * X を計算するだけ！','scanf("%d %d %d", &a, &b, &x); で読み込む','printf("%d\\n", a + b * x); で出力'],
    template:{
      c:'#include <stdio.h>\nint main() {\n    int a, b, x;\n    scanf("%d %d %d", &a, &b, &x);\n    printf("%d\\n", a + b * x);\n    return 0;\n}',
      cpp:'#include <iostream>\nusing namespace std;\nint main(){\n    int a,b,x; cin>>a>>b>>x;\n    cout<<a+b*x<<endl;\n}',
      python:'a, b, x = map(int, input().split())\nprint(a + b * x)',
      java:'import java.util.Scanner;\npublic class Main{\n    public static void main(String[] args){\n        Scanner sc=new Scanner(System.in);\n        int a=sc.nextInt(),b=sc.nextInt(),x=sc.nextInt();\n        System.out.println(a+b*x);\n    }\n}'
    }
  },
  {
    id:'p2025_2',year:2025,num:2,title:'タワーから見る花火',points:2,diff:1,cat:'math',
    tags:['条件分岐','比較'],
    desc:'展望デッキの高さH、花火の球の中心C、半径Rが与えられる。side/up/downを出力せよ。',
    inputDesc:'1行にH, C, R（整数）。',
    outputDesc:'真横→side、見上げ→up、見下ろし→down。',
    examples:[{input:'1000 1200 300',output:'side'},{input:'100 500 100',output:'up'},{input:'1000 500 100',output:'down'}],
    hints:['球の最低点=C-R、最高点=C+R','最低点≤H≤最高点 → side','最低点>H → up、最高点<H → down'],
    template:{
      c:'#include <stdio.h>\nint main() {\n    int h,c,r;\n    scanf("%d %d %d",&h,&c,&r);\n    int lo=c-r, hi=c+r;\n    if(lo<=h && h<=hi) printf("side\\n");\n    else if(lo>h)      printf("up\\n");\n    else               printf("down\\n");\n    return 0;\n}',
      cpp:'#include<iostream>\nusing namespace std;\nint main(){\n    int h,c,r; cin>>h>>c>>r;\n    int lo=c-r,hi=c+r;\n    if(lo<=h&&h<=hi) cout<<"side";\n    else if(lo>h)    cout<<"up";\n    else             cout<<"down";\n    cout<<endl;\n}',
      python:'h,c,r=map(int,input().split())\nlo,hi=c-r,c+r\nif lo<=h<=hi: print("side")\nelif lo>h:   print("up")\nelse:        print("down")',
      java:'import java.util.Scanner;\npublic class Main{\n    public static void main(String[]a){\n        Scanner sc=new Scanner(System.in);\n        int h=sc.nextInt(),c=sc.nextInt(),r=sc.nextInt();\n        int lo=c-r,hi=c+r;\n        if(lo<=h&&h<=hi)System.out.println("side");\n        else if(lo>h)   System.out.println("up");\n        else            System.out.println("down");\n    }\n}'
    }
  },
  {
    id:'p2024_1',year:2024,num:1,title:'もらったキャンディ',points:1,diff:1,cat:'math',
    tags:['算術','入出力'],
    desc:'最初10個持っていた。今C個ある。もらった数を求めよ。',
    inputDesc:'1行にC(11≤C≤100)。', outputDesc:'もらった数。',
    examples:[{input:'12',output:'2'},{input:'99',output:'89'}],
    hints:['C - 10 を出力するだけ！'],
    template:{
      c:'#include <stdio.h>\nint main(){\n    int c; scanf("%d",&c);\n    printf("%d\\n",c-10);\n    return 0;\n}',
      cpp:'#include<iostream>\nusing namespace std;\nint main(){int c;cin>>c;cout<<c-10<<endl;}',
      python:'print(int(input())-10)',
      java:'import java.util.Scanner;\npublic class Main{\n    public static void main(String[]a){\n        System.out.println(new Scanner(System.in).nextInt()-10);\n    }\n}'
    }
  },
  {
    id:'p2024_2',year:2024,num:2,title:'神輿の担ぎ手',points:2,diff:1,cat:'math',
    tags:['条件分岐','切り上げ除算'],
    desc:'子供N人、1人の担げる重さc、神輿の重さw。担げるか判定し最低人数を求めよ。',
    inputDesc:'1行目にN。2行目にc, w。',
    outputDesc:'担げるなら"Yes"と人数、無理なら"No"。',
    examples:[{input:'10\n50 250',output:'Yes\n5'},{input:'10\n50 370',output:'Yes\n8'},{input:'10\n50 650',output:'No'}],
    hints:['必要人数=ceil(w/c)','C言語: (w+c-1)/c で切り上げ除算','必要人数>N なら"No"'],
    template:{
      c:'#include <stdio.h>\nint main(){\n    int n,c,w;\n    scanf("%d",&n); scanf("%d %d",&c,&w);\n    int need=(w+c-1)/c;\n    if(need<=n) printf("Yes\\n%d\\n",need);\n    else        printf("No\\n");\n    return 0;\n}',
      cpp:'#include<iostream>\nusing namespace std;\nint main(){\n    int n,c,w;cin>>n>>c>>w;\n    int need=(w+c-1)/c;\n    if(need<=n)cout<<"Yes\\n"<<need<<endl;\n    else cout<<"No"<<endl;\n}',
      python:'import math\nn=int(input())\nc,w=map(int,input().split())\nneed=math.ceil(w/c)\nif need<=n:\n    print("Yes");print(need)\nelse: print("No")',
      java:'import java.util.Scanner;\npublic class Main{\n    public static void main(String[]a){\n        Scanner sc=new Scanner(System.in);\n        int n=sc.nextInt(),c=sc.nextInt(),w=sc.nextInt();\n        int need=(w+c-1)/c;\n        if(need<=n){System.out.println("Yes");System.out.println(need);}\n        else System.out.println("No");\n    }\n}'
    }
  },
  {
    id:'p2023_1',year:2023,num:1,title:'キャンディの分配',points:1,diff:1,cat:'math',
    tags:['剰余','算術'],
    desc:'キャンディA個をN+1人で均等に分けたとき余る数を求めよ。',
    inputDesc:'1行にA, N。', outputDesc:'余った数。',
    examples:[{input:'5 1',output:'1'},{input:'10 10',output:'10'}],
    hints:['A % (N+1) が答え。% は剰余演算子。'],
    template:{
      c:'#include <stdio.h>\nint main(){\n    int a,n; scanf("%d %d",&a,&n);\n    printf("%d\\n",a%(n+1));\n    return 0;\n}',
      cpp:'#include<iostream>\nusing namespace std;\nint main(){int a,n;cin>>a>>n;cout<<a%(n+1)<<endl;}',
      python:'a,n=map(int,input().split())\nprint(a%(n+1))',
      java:'import java.util.Scanner;\npublic class Main{\n    public static void main(String[]a){\n        Scanner sc=new Scanner(System.in);\n        int x=sc.nextInt(),n=sc.nextInt();\n        System.out.println(x%(n+1));\n    }\n}'
    }
  },
  {
    id:'p2024_3',year:2024,num:3,title:'ラッキーナンバー',points:3,diff:1,cat:'string',
    tags:['文字列','数え上げ'],
    desc:'整数nの10進表記に数字dが何個含まれるか求めよ。',
    inputDesc:'1行にd(0≤d≤9)とn(0≤n≤10^6)。', outputDesc:'dの個数。',
    examples:[{input:'9 19191',output:'2'},{input:'0 1234',output:'0'},{input:'0 12340',output:'1'}],
    hints:['nを文字列に変換して各文字を調べる。','C言語: sprintf(buf,"%d",n); で文字列化。','buf[i]==\'0\'+d を数える。'],
    template:{
      c:'#include <stdio.h>\n#include <string.h>\nint main(){\n    int d,n; scanf("%d %d",&d,&n);\n    char buf[20]; sprintf(buf,"%d",n);\n    int cnt=0;\n    for(int i=0;buf[i];i++)\n        if(buf[i]==\'0\'+d) cnt++;\n    printf("%d\\n",cnt);\n    return 0;\n}',
      cpp:'#include<bits/stdc++.h>\nusing namespace std;\nint main(){\n    int d,n;cin>>d>>n;\n    string s=to_string(n);\n    cout<<count(s.begin(),s.end(),\'0\'+d)<<endl;\n}',
      python:'d,n=map(int,input().split())\nprint(str(n).count(str(d)))',
      java:'import java.util.Scanner;\npublic class Main{\n    public static void main(String[]a){\n        Scanner sc=new Scanner(System.in);\n        int d=sc.nextInt(),n=sc.nextInt(),cnt=0;\n        for(char c:Integer.toString(n).toCharArray())\n            if(c-\'0\'==d)cnt++;\n        System.out.println(cnt);\n    }\n}'
    }
  },
  {
    id:'pex_01',year:0,num:0,title:'最大値と最小値',points:1,diff:1,cat:'math',
    tags:['ループ','最大最小'],
    desc:'N個の整数が与えられる。最大値と最小値を出力せよ。',
    inputDesc:'1行目にN(1≤N≤100)。2行目にN個の整数。',
    outputDesc:'最大値 最小値 を空白区切りで出力。',
    examples:[{input:'5\n3 1 4 1 5',output:'5 1'},{input:'3\n-10 0 10',output:'10 -10'}],
    hints:['最初の要素をmax,minに代入して始める。','ループでa[i]>maxならmax=a[i]を繰り返す。'],
    template:{
      c:'#include <stdio.h>\nint main(){\n    int n; scanf("%d",&n);\n    int a[100];\n    for(int i=0;i<n;i++) scanf("%d",&a[i]);\n    int mx=a[0],mn=a[0];\n    for(int i=1;i<n;i++){\n        if(a[i]>mx) mx=a[i];\n        if(a[i]<mn) mn=a[i];\n    }\n    printf("%d %d\\n",mx,mn);\n    return 0;\n}',
      cpp:'#include<bits/stdc++.h>\nusing namespace std;\nint main(){\n    int n;cin>>n;vector<int>a(n);\n    for(auto&x:a)cin>>x;\n    cout<<*max_element(a.begin(),a.end())<<" "<<*min_element(a.begin(),a.end())<<endl;\n}',
      python:'n=int(input())\na=list(map(int,input().split()))\nprint(max(a),min(a))',
      java:'import java.util.*;\npublic class Main{\n    public static void main(String[]a){\n        Scanner sc=new Scanner(System.in);int n=sc.nextInt();\n        int[]arr=new int[n];\n        for(int i=0;i<n;i++)arr[i]=sc.nextInt();\n        int mx=arr[0],mn=arr[0];\n        for(int x:arr){mx=Math.max(mx,x);mn=Math.min(mn,x);}\n        System.out.println(mx+" "+mn);\n    }\n}'
    }
  },
  {
    id:'pex_02',year:0,num:0,title:'FizzBuzz',points:1,diff:1,cat:'math',
    tags:['ループ','条件分岐','剰余'],
    desc:'1からNまで、3の倍数はFizz、5の倍数はBuzz、両方はFizzBuzz、他は数字を出力せよ。',
    inputDesc:'1行にN(1≤N≤100)。', outputDesc:'N行出力。',
    examples:[{input:'15',output:'1\n2\nFizz\n4\nBuzz\nFizz\n7\n8\nFizz\nBuzz\n11\nFizz\n13\n14\nFizzBuzz'}],
    hints:['15の倍数を最初に判定する。','if(i%15==0)→FizzBuzz、if(i%3==0)→Fizz、if(i%5==0)→Buzz の順。'],
    template:{
      c:'#include <stdio.h>\nint main(){\n    int n; scanf("%d",&n);\n    for(int i=1;i<=n;i++){\n        if(i%15==0)      printf("FizzBuzz\\n");\n        else if(i%3==0)  printf("Fizz\\n");\n        else if(i%5==0)  printf("Buzz\\n");\n        else             printf("%d\\n",i);\n    }\n    return 0;\n}',
      cpp:'#include<iostream>\nusing namespace std;\nint main(){\n    int n;cin>>n;\n    for(int i=1;i<=n;i++){\n        if(i%15==0)cout<<"FizzBuzz";\n        else if(i%3==0)cout<<"Fizz";\n        else if(i%5==0)cout<<"Buzz";\n        else cout<<i;\n        cout<<endl;\n    }\n}',
      python:'n=int(input())\nfor i in range(1,n+1):\n    if i%15==0:print("FizzBuzz")\n    elif i%3==0:print("Fizz")\n    elif i%5==0:print("Buzz")\n    else:print(i)',
      java:'import java.util.Scanner;\npublic class Main{\n    public static void main(String[]a){\n        int n=new Scanner(System.in).nextInt();\n        for(int i=1;i<=n;i++){\n            if(i%15==0)System.out.println("FizzBuzz");\n            else if(i%3==0)System.out.println("Fizz");\n            else if(i%5==0)System.out.println("Buzz");\n            else System.out.println(i);\n        }\n    }\n}'
    }
  },
  {
    id:'pex_03',year:0,num:0,title:'素数判定',points:2,diff:1,cat:'math',
    tags:['素数','数論'],
    desc:'N個の整数がそれぞれ素数かどうか判定せよ。',
    inputDesc:'1行目にN。続くN行に整数m(1≤m≤10^6)。',
    outputDesc:'各整数に"Yes"/"No"。',
    examples:[{input:'5\n2\n3\n4\n17\n1',output:'Yes\nYes\nNo\nYes\nNo'}],
    hints:['2からsqrt(m)まで割り切れなければ素数。','m=1 は素数でない！'],
    template:{
      c:'#include <stdio.h>\n#include <stdbool.h>\nbool ip(int m){\n    if(m<2)return false;\n    for(int i=2;(long long)i*i<=m;i++)\n        if(m%i==0)return false;\n    return true;\n}\nint main(){\n    int n; scanf("%d",&n);\n    while(n--){int m;scanf("%d",&m);printf(ip(m)?"Yes\\n":"No\\n");}\n    return 0;\n}',
      cpp:'#include<bits/stdc++.h>\nusing namespace std;\nbool ip(int m){if(m<2)return 0;for(int i=2;(long long)i*i<=m;i++)if(m%i==0)return 0;return 1;}\nint main(){int n;cin>>n;while(n--){int m;cin>>m;cout<<(ip(m)?"Yes":"No")<<endl;}}',
      python:'def ip(m):\n    if m<2:return False\n    for i in range(2,int(m**0.5)+1):\n        if m%i==0:return False\n    return True\nn=int(input())\nfor _ in range(n):print("Yes"if ip(int(input()))else"No")',
      java:'import java.util.Scanner;\npublic class Main{\n    static boolean ip(int m){if(m<2)return false;for(int i=2;(long)i*i<=m;i++)if(m%i==0)return false;return true;}\n    public static void main(String[]a){\n        Scanner sc=new Scanner(System.in);int n=sc.nextInt();\n        while(n-->0)System.out.println(ip(sc.nextInt())?"Yes":"No");\n    }\n}'
    }
  },
  /* ===== ★★初級 diff:2 ===== */
  {
    id:'p2025_3',year:2025,num:3,title:'登山記録の集計',points:3,diff:2,cat:'math',
    tags:['2次元配列','ループ','最大値'],
    desc:'N個の山にM回ずつ登った記録がある。各山の高さ（M回の最大到達高さ）の和を求めよ。',
    inputDesc:'1行目にN, M。続くN行にM個の到達高さ。',
    outputDesc:'すべての山の高さの和。',
    examples:[{input:'3 2\n10 30\n100 45\n500 500',output:'630'},{input:'2 4\n2 2 1 4\n5 8 5 8',output:'12'}],
    hints:['各山の「高さ」=M回の記録のうち最大値。','外ループN（山）、内ループM（回数）で最大値を更新。'],
    template:{
      c:'#include <stdio.h>\nint main(){\n    int n,m; scanf("%d %d",&n,&m);\n    int ans=0;\n    for(int i=0;i<n;i++){\n        int peak=0;\n        for(int j=0;j<m;j++){int h;scanf("%d",&h);if(h>peak)peak=h;}\n        ans+=peak;\n    }\n    printf("%d\\n",ans);\n    return 0;\n}',
      cpp:'#include<bits/stdc++.h>\nusing namespace std;\nint main(){\n    int n,m;cin>>n>>m;int ans=0;\n    for(int i=0;i<n;i++){int pk=0;for(int j=0;j<m;j++){int h;cin>>h;pk=max(pk,h);}ans+=pk;}\n    cout<<ans<<endl;\n}',
      python:'n,m=map(int,input().split())\nans=0\nfor _ in range(n):ans+=max(map(int,input().split()))\nprint(ans)',
      java:'import java.util.Scanner;\npublic class Main{\n    public static void main(String[]a){\n        Scanner sc=new Scanner(System.in);\n        int n=sc.nextInt(),m=sc.nextInt(),ans=0;\n        for(int i=0;i<n;i++){int pk=0;for(int j=0;j<m;j++){int h=sc.nextInt();if(h>pk)pk=h;}ans+=pk;}\n        System.out.println(ans);\n    }\n}'
    }
  },
  {
    id:'p2023_3',year:2023,num:3,title:'菌の祖先',points:3,diff:2,cat:'math',
    tags:['再帰','整数'],
    desc:'番号bの菌から番号1まで親子関係をさかのぼって番号を出力せよ。親の番号はfloor(b/2)。',
    inputDesc:'1行に菌の番号b(1≤b≤10^6)。',
    outputDesc:'bから1まで1行ずつ出力。',
    examples:[{input:'5',output:'5\n2\n1'},{input:'12',output:'12\n6\n3\n1'}],
    hints:['親 = b / 2（整数除算）。','while(b>=1){ print(b); b=b/2; }'],
    template:{
      c:'#include <stdio.h>\nint main(){\n    int b; scanf("%d",&b);\n    while(b>=1){printf("%d\\n",b);b=b/2;}\n    return 0;\n}',
      cpp:'#include<iostream>\nusing namespace std;\nint main(){int b;cin>>b;while(b>=1){cout<<b<<endl;b/=2;}}',
      python:'b=int(input())\nwhile b>=1:\n    print(b);b//=2',
      java:'import java.util.Scanner;\npublic class Main{\n    public static void main(String[]a){\n        int b=new Scanner(System.in).nextInt();\n        while(b>=1){System.out.println(b);b/=2;}\n    }\n}'
    }
  },
  {
    id:'p2023_5',year:2023,num:5,title:'2023に似た数',points:5,diff:2,cat:'math',
    tags:['素数判定','数論'],
    desc:'整数Nが p×p×q（p≠q、両方素数）の形で表せるか判定せよ。',
    inputDesc:'1行にN(1≤N≤10^9)。', outputDesc:'"Yes"または"No"。',
    examples:[{input:'2023',output:'Yes'},{input:'12',output:'Yes'},{input:'27',output:'No'},{input:'49',output:'No'}],
    hints:['素数pを2から探す。p*p*p≤Nの間だけ調べれば十分。','N%(p*p)==0 のとき q=N/p/p を確認。','qが素数かつq≠pなら"Yes"。'],
    template:{
      c:'#include <stdio.h>\n#include <stdbool.h>\nbool ip(long long n){if(n<2)return false;for(long long i=2;i*i<=n;i++)if(n%i==0)return false;return true;}\nint main(){\n    long long n; scanf("%lld",&n);\n    bool ok=false;\n    for(long long p=2;p*p*p<=n;p++){\n        if(!ip(p))continue;\n        if(n%(p*p)==0){long long q=n/p/p;if(ip(q)&&q!=p){ok=true;break;}}\n    }\n    printf(ok?"Yes\\n":"No\\n");\n    return 0;\n}',
      cpp:'#include<bits/stdc++.h>\nusing namespace std;\nbool ip(long long n){if(n<2)return 0;for(long long i=2;i*i<=n;i++)if(n%i==0)return 0;return 1;}\nint main(){long long n;cin>>n;bool ok=0;for(long long p=2;p*p*p<=n;p++)if(ip(p)&&n%(p*p)==0){long long q=n/p/p;if(ip(q)&&q!=p){ok=1;break;}}cout<<(ok?"Yes":"No")<<endl;}',
      python:'def ip(n):\n    if n<2:return False\n    i=2\n    while i*i<=n:\n        if n%i==0:return False\n        i+=1\n    return True\nn=int(input())\nok=False;p=2\nwhile p*p*p<=n:\n    if ip(p) and n%(p*p)==0:\n        q=n//p//p\n        if ip(q) and q!=p:ok=True;break\n    p+=1\nprint("Yes"if ok else"No")',
      java:'import java.util.Scanner;\npublic class Main{\n    static boolean ip(long n){if(n<2)return false;for(long i=2;i*i<=n;i++)if(n%i==0)return false;return true;}\n    public static void main(String[]a){\n        long n=new Scanner(System.in).nextLong();boolean ok=false;\n        for(long p=2;p*p*p<=n;p++)if(ip(p)&&n%(p*p)==0){long q=n/p/p;if(ip(q)&&q!=p){ok=true;break;}}\n        System.out.println(ok?"Yes":"No");\n    }\n}'
    }
  },
  {
    id:'pex_04',year:0,num:0,title:'逆順出力',points:2,diff:2,cat:'string',
    tags:['配列','逆順'],
    desc:'N個の整数を逆順に出力せよ。',
    inputDesc:'1行目にN。2行目にN個の整数。', outputDesc:'逆順に空白区切りで出力。',
    examples:[{input:'5\n1 2 3 4 5',output:'5 4 3 2 1'}],
    hints:['配列に格納してi=n-1から0まで出力。'],
    template:{
      c:'#include <stdio.h>\nint main(){\n    int n; scanf("%d",&n);\n    int a[100];\n    for(int i=0;i<n;i++) scanf("%d",&a[i]);\n    for(int i=n-1;i>=0;i--){\n        printf("%d",a[i]);\n        if(i>0) printf(" ");\n    }\n    printf("\\n");\n    return 0;\n}',
      cpp:'#include<bits/stdc++.h>\nusing namespace std;\nint main(){int n;cin>>n;vector<int>a(n);for(auto&x:a)cin>>x;for(int i=n-1;i>=0;i--)cout<<a[i]<<(i?" ":"\\n");}',
      python:'n=int(input())\nprint(*list(map(int,input().split()))[::-1])',
      java:'import java.util.*;\npublic class Main{\n    public static void main(String[]a){\n        Scanner sc=new Scanner(System.in);int n=sc.nextInt();\n        int[]arr=new int[n];\n        for(int i=0;i<n;i++)arr[i]=sc.nextInt();\n        StringBuilder sb=new StringBuilder();\n        for(int i=n-1;i>=0;i--){if(i<n-1)sb.append(\' \');sb.append(arr[i]);}\n        System.out.println(sb);\n    }\n}'
    }
  },
  {
    id:'pex_05',year:0,num:0,title:'回文判定',points:2,diff:2,cat:'string',
    tags:['文字列','回文'],
    desc:'文字列が回文かどうか判定せよ。',
    inputDesc:'1行に文字列S（アルファベット小文字、1≤|S|≤100）。',
    outputDesc:'"Yes"または"No"。',
    examples:[{input:'racecar',output:'Yes'},{input:'hello',output:'No'}],
    hints:['S[i]とS[n-1-i]を比較してすべて一致すれば回文。','ループはi<n/2まで。'],
    template:{
      c:'#include <stdio.h>\n#include <string.h>\nint main(){\n    char s[105]; scanf("%s",s);\n    int n=strlen(s),ok=1;\n    for(int i=0;i<n/2;i++)\n        if(s[i]!=s[n-1-i]){ok=0;break;}\n    printf(ok?"Yes\\n":"No\\n");\n    return 0;\n}',
      cpp:'#include<bits/stdc++.h>\nusing namespace std;\nint main(){string s;cin>>s;string r=s;reverse(r.begin(),r.end());cout<<(s==r?"Yes":"No")<<endl;}',
      python:'s=input();print("Yes"if s==s[::-1]else"No")',
      java:'import java.util.Scanner;\npublic class Main{\n    public static void main(String[]a){\n        String s=new Scanner(System.in).next();\n        System.out.println(s.equals(new StringBuilder(s).reverse().toString())?"Yes":"No");\n    }\n}'
    }
  },
  {
    id:'pex_06',year:0,num:0,title:'GCDとLCM',points:3,diff:2,cat:'math',
    tags:['GCD','LCM','ユークリッド'],
    desc:'2つの正の整数A, BのGCDとLCMを求めよ。',
    inputDesc:'1行にA, B(1≤A,B≤10^9)。',
    outputDesc:'GCDとLCMを空白区切りで出力。',
    examples:[{input:'12 8',output:'4 24'},{input:'7 13',output:'1 91'}],
    hints:['GCD: ユークリッドの互除法 gcd(a,b)=gcd(b,a%b)。','LCM = A * B / GCD(A,B)。long longを使う。'],
    template:{
      c:'#include <stdio.h>\nlong long gcd(long long a,long long b){return b==0?a:gcd(b,a%b);}\nint main(){\n    long long a,b; scanf("%lld %lld",&a,&b);\n    long long g=gcd(a,b);\n    printf("%lld %lld\\n",g,a/g*b);\n    return 0;\n}',
      cpp:'#include<bits/stdc++.h>\nusing namespace std;\nint main(){long long a,b;cin>>a>>b;long long g=__gcd(a,b);cout<<g<<" "<<a/g*b<<endl;}',
      python:'from math import gcd\na,b=map(int,input().split())\ng=gcd(a,b);print(g,a//g*b)',
      java:'import java.util.Scanner;\npublic class Main{\n    static long gcd(long a,long b){return b==0?a:gcd(b,a%b);}\n    public static void main(String[]a){\n        Scanner sc=new Scanner(System.in);long x=sc.nextLong(),y=sc.nextLong();\n        long g=gcd(x,y);System.out.println(g+" "+x/g*y);\n    }\n}'
    }
  },
  {
    id:'pex_07',year:0,num:0,title:'行列の転置',points:3,diff:2,cat:'math',
    tags:['2次元配列','行列'],
    desc:'H行W列の行列を転置してW行H列の行列を出力せよ。',
    inputDesc:'1行目にH, W(1≤H,W≤50)。続くH行にW個の整数。',
    outputDesc:'W行H列の転置行列。',
    examples:[{input:'2 3\n1 2 3\n4 5 6',output:'1 4\n2 5\n3 6'}],
    hints:['元の行列a[i][j]の転置はa[j][i]。'],
    template:{
      c:'#include <stdio.h>\nint main(){\n    int h,w; scanf("%d %d",&h,&w);\n    int a[50][50];\n    for(int i=0;i<h;i++) for(int j=0;j<w;j++) scanf("%d",&a[i][j]);\n    for(int j=0;j<w;j++){\n        for(int i=0;i<h;i++){if(i)printf(" ");printf("%d",a[i][j]);}\n        printf("\\n");\n    }\n    return 0;\n}',
      cpp:'#include<bits/stdc++.h>\nusing namespace std;\nint main(){int h,w;cin>>h>>w;vector<vector<int>>a(h,vector<int>(w));for(auto&r:a)for(auto&x:r)cin>>x;for(int j=0;j<w;j++){for(int i=0;i<h;i++){if(i)cout<<\' \';cout<<a[i][j];}cout<<endl;}}',
      python:'h,w=map(int,input().split())\na=[list(map(int,input().split()))for _ in range(h)]\nfor j in range(w):print(\' \'.join(str(a[i][j])for i in range(h)))',
      java:'import java.util.Scanner;\npublic class Main{\n    public static void main(String[]a){\n        Scanner sc=new Scanner(System.in);int h=sc.nextInt(),w=sc.nextInt();\n        int[][]m=new int[h][w];\n        for(int i=0;i<h;i++)for(int j=0;j<w;j++)m[i][j]=sc.nextInt();\n        for(int j=0;j<w;j++){StringBuilder sb=new StringBuilder();for(int i=0;i<h;i++){if(i>0)sb.append(\' \');sb.append(m[i][j]);}System.out.println(sb);}\n    }\n}'
    }
  },
  /* ===== ★★★中級 diff:3 ===== */
  {
    id:'p2025_5',year:2025,num:5,title:'二つの数列',points:6,diff:3,cat:'greedy',
    tags:['貪欲法','ソート'],
    desc:'数列AとBにK回操作（a[i]をb[i]で置換）して差の和を最大化せよ。',
    inputDesc:'1行目にN, K。2行目にA、3行目にB。', outputDesc:'最大値。',
    examples:[{input:'5 1\n0 2 1 3 4\n-2 1 0 2 3',output:'5'},{input:'5 2\n0 1 2 3 4\n-2 0 1 2 3',output:'4'}],
    hints:['差d[i]=a[i]-b[i]を計算し合計する。','差が負のものを優先して置換。','差を昇順ソートし、負のものから最大K個を選ぶ。'],
    template:{
      c:'#include <stdio.h>\n#include <stdlib.h>\nint cmp(const void*x,const void*y){return *(int*)x-*(int*)y;}\nint main(){\n    int n,k; scanf("%d %d",&n,&k);\n    int a[100000],b[100000],d[100000];\n    for(int i=0;i<n;i++) scanf("%d",&a[i]);\n    for(int i=0;i<n;i++) scanf("%d",&b[i]);\n    long long sum=0;\n    for(int i=0;i<n;i++){d[i]=a[i]-b[i];sum+=d[i];}\n    qsort(d,n,sizeof(int),cmp);\n    for(int i=0;i<k;i++) if(d[i]<0) sum-=d[i];\n    printf("%lld\\n",sum);\n    return 0;\n}',
      cpp:'#include<bits/stdc++.h>\nusing namespace std;\nint main(){int n,k;cin>>n>>k;vector<int>a(n),b(n);for(auto&x:a)cin>>x;for(auto&x:b)cin>>x;vector<int>d(n);long long sum=0;for(int i=0;i<n;i++){d[i]=a[i]-b[i];sum+=d[i];}sort(d.begin(),d.end());for(int i=0;i<k;i++)if(d[i]<0)sum-=d[i];cout<<sum<<endl;}',
      python:'n,k=map(int,input().split())\na=list(map(int,input().split()))\nb=list(map(int,input().split()))\nd=sorted([a[i]-b[i]for i in range(n)])\ntotal=sum(d)\nfor i in range(k):\n    if d[i]<0:total-=d[i]\nprint(total)',
      java:'import java.util.*;\npublic class Main{\n    public static void main(String[]a){\n        Scanner sc=new Scanner(System.in);int n=sc.nextInt(),k=sc.nextInt();\n        int[]arr=new int[n],b=new int[n];\n        for(int i=0;i<n;i++)arr[i]=sc.nextInt();\n        for(int i=0;i<n;i++)b[i]=sc.nextInt();\n        int[]d=new int[n];long sum=0;\n        for(int i=0;i<n;i++){d[i]=arr[i]-b[i];sum+=d[i];}\n        Arrays.sort(d);\n        for(int i=0;i<k;i++)if(d[i]<0)sum-=d[i];\n        System.out.println(sum);\n    }\n}'
    }
  },
  {
    id:'p2024_5',year:2024,num:5,title:'データセンター',points:6,diff:3,cat:'greedy',
    tags:['貪欲法','ソート'],
    desc:'N台中M台を空にしたい。空きスペースを使って移動できるか判定せよ。',
    inputDesc:'1行目にN, M。続くN行にci, ai（容量・現在数）。', outputDesc:'"Yes"または"No"。',
    examples:[{input:'5 2\n3 2\n2 2\n6 5\n5 4\n4 1',output:'Yes'},{input:'3 1\n100 95\n100 85\n100 21',output:'No'}],
    hints:['ファイルが多い台をM台選んで空にする。','残りN-M台の空き容量合計≥空にするM台のファイル合計 なら"Yes"。'],
    template:{
      c:'#include <stdio.h>\nint main(){\n    int n,m; scanf("%d %d",&n,&m);\n    int c[1000],a[1000];\n    for(int i=0;i<n;i++) scanf("%d %d",&c[i],&a[i]);\n    int idx[1000];\n    for(int i=0;i<n;i++) idx[i]=i;\n    for(int i=0;i<n-1;i++)\n        for(int j=0;j<n-1-i;j++)\n            if(a[idx[j]]<a[idx[j+1]]){int t=idx[j];idx[j]=idx[j+1];idx[j+1]=t;}\n    long long need=0,cap=0;\n    for(int i=0;i<m;i++) need+=a[idx[i]];\n    for(int i=m;i<n;i++) cap+=c[idx[i]]-a[idx[i]];\n    printf(need<=cap?"Yes\\n":"No\\n");\n    return 0;\n}',
      cpp:'#include<bits/stdc++.h>\nusing namespace std;\nint main(){int n,m;cin>>n>>m;vector<pair<int,int>>sv(n);for(auto&p:sv)cin>>p.first>>p.second;sort(sv.begin(),sv.end(),[](auto&a,auto&b){return a.second>b.second;});long long need=0,cap=0;for(int i=0;i<m;i++)need+=sv[i].second;for(int i=m;i<n;i++)cap+=sv[i].first-sv[i].second;cout<<(need<=cap?"Yes":"No")<<endl;}',
      python:'n,m=map(int,input().split())\nsv=[list(map(int,input().split()))for _ in range(n)]\nsv.sort(key=lambda x:-x[1])\nneed=sum(s[1]for s in sv[:m])\ncap=sum(s[0]-s[1]for s in sv[m:])\nprint("Yes"if need<=cap else"No")',
      java:'import java.util.*;\npublic class Main{\n    public static void main(String[]a){\n        Scanner sc=new Scanner(System.in);int n=sc.nextInt(),m=sc.nextInt();\n        int[][]s=new int[n][2];for(int i=0;i<n;i++){s[i][0]=sc.nextInt();s[i][1]=sc.nextInt();}\n        Arrays.sort(s,(x,y)->y[1]-x[1]);\n        long need=0,cap=0;\n        for(int i=0;i<m;i++)need+=s[i][1];for(int i=m;i<n;i++)cap+=s[i][0]-s[i][1];\n        System.out.println(need<=cap?"Yes":"No");\n    }\n}'
    }
  },
  {
    id:'p2024_6',year:2024,num:6,title:'湖の調査',points:6,diff:3,cat:'graph',
    tags:['BFS','グリッド','連結成分'],
    desc:'グリッドマップで海とつながっていない水面の集まり（湖）の数を求めよ。',
    inputDesc:'1行目にH, W。続くH行に"#"(地面)と"."(水面)の文字列。',
    outputDesc:'湖の数。',
    examples:[{input:'4 14\n###...###..##.\n#..#..##..####\n#.##.##..##..#\n###..#########',output:'2'}],
    hints:['外周の水面からBFSで「海」につながる水面を全部マーク。','残った水面の連結成分の数が湖の数。'],
    template:{
      c:'#include <stdio.h>\n#include <string.h>\n#define MX 205\nchar g[MX][MX];int vis[MX][MX],H,W;\nint qx[MX*MX],qy[MX*MX],hd,tl;\nint dx[]={0,0,1,-1},dy[]={1,-1,0,0};\nvoid bfs(int sx,int sy){\n    hd=tl=0;qx[tl]=sx;qy[tl]=sy;tl++;vis[sx][sy]=1;\n    while(hd<tl){int x=qx[hd],y=qy[hd];hd++;\n        for(int d=0;d<4;d++){int nx=x+dx[d],ny=y+dy[d];\n            if(nx>=0&&nx<H&&ny>=0&&ny<W&&!vis[nx][ny]&&g[nx][ny]==\'.\'){vis[nx][ny]=1;qx[tl]=nx;qy[tl]=ny;tl++;}}}\n}\nint main(){\n    scanf("%d %d",&H,&W);\n    for(int i=0;i<H;i++) scanf("%s",g[i]);\n    for(int i=0;i<H;i++){if(!vis[i][0]&&g[i][0]==\'.\')bfs(i,0);if(!vis[i][W-1]&&g[i][W-1]==\'.\')bfs(i,W-1);}\n    for(int j=0;j<W;j++){if(!vis[0][j]&&g[0][j]==\'.\')bfs(0,j);if(!vis[H-1][j]&&g[H-1][j]==\'.\')bfs(H-1,j);}\n    int lake=0;\n    for(int i=0;i<H;i++) for(int j=0;j<W;j++) if(!vis[i][j]&&g[i][j]==\'.\')bfs(i,j),lake++;\n    printf("%d\\n",lake);\n    return 0;\n}',
      cpp:'#include<bits/stdc++.h>\nusing namespace std;\nint H,W;string g[205];bool v[205][205];\nint dx[]={0,0,1,-1},dy[]={1,-1,0,0};\nvoid bfs(int sx,int sy){queue<pair<int,int>>q;q.push({sx,sy});v[sx][sy]=1;while(!q.empty()){auto[x,y]=q.front();q.pop();for(int d=0;d<4;d++){int nx=x+dx[d],ny=y+dy[d];if(nx>=0&&nx<H&&ny>=0&&ny<W&&!v[nx][ny]&&g[nx][ny]==\'.\')v[nx][ny]=1,q.push({nx,ny});}}}\nint main(){cin>>H>>W;for(int i=0;i<H;i++)cin>>g[i];for(int i=0;i<H;i++){if(!v[i][0]&&g[i][0]==\'.\')bfs(i,0);if(!v[i][W-1]&&g[i][W-1]==\'.\')bfs(i,W-1);}for(int j=0;j<W;j++){if(!v[0][j]&&g[0][j]==\'.\')bfs(0,j);if(!v[H-1][j]&&g[H-1][j]==\'.\')bfs(H-1,j);}int ans=0;for(int i=0;i<H;i++)for(int j=0;j<W;j++)if(!v[i][j]&&g[i][j]==\'.\')bfs(i,j),ans++;cout<<ans<<endl;}',
      python:'from collections import deque\nH,W=map(int,input().split())\ngrid=[input()for _ in range(H)]\nvis=[[False]*W for _ in range(H)]\ndef bfs(sx,sy):\n    q=deque([(sx,sy)]);vis[sx][sy]=True\n    while q:\n        x,y=q.popleft()\n        for dx,dy in[(0,1),(0,-1),(1,0),(-1,0)]:\n            nx,ny=x+dx,y+dy\n            if 0<=nx<H and 0<=ny<W and not vis[nx][ny] and grid[nx][ny]==\'.\':\n                vis[nx][ny]=True;q.append((nx,ny))\nfor i in range(H):\n    for j in[0,W-1]:\n        if not vis[i][j] and grid[i][j]==\'.\':bfs(i,j)\nfor j in range(W):\n    for i in[0,H-1]:\n        if not vis[i][j] and grid[i][j]==\'.\':bfs(i,j)\nlake=0\nfor i in range(H):\n    for j in range(W):\n        if not vis[i][j] and grid[i][j]==\'.\':bfs(i,j);lake+=1\nprint(lake)',
      java:'import java.util.*;\npublic class Main{\n    static int H,W;static char[][]g;static boolean[][]v;\n    static int[]dx={0,0,1,-1},dy={1,-1,0,0};\n    static void bfs(int sx,int sy){Queue<int[]>q=new LinkedList<>();q.add(new int[]{sx,sy});v[sx][sy]=true;while(!q.isEmpty()){int[]p=q.poll();for(int d=0;d<4;d++){int nx=p[0]+dx[d],ny=p[1]+dy[d];if(nx>=0&&nx<H&&ny>=0&&ny<W&&!v[nx][ny]&&g[nx][ny]==\'.\')v[nx][ny]=true;q.add(new int[]{nx,ny});}}}\n    public static void main(String[]a){Scanner sc=new Scanner(System.in);H=sc.nextInt();W=sc.nextInt();g=new char[H][];v=new boolean[H][W];for(int i=0;i<H;i++)g[i]=sc.next().toCharArray();for(int i=0;i<H;i++){if(!v[i][0]&&g[i][0]==\'.\')bfs(i,0);if(!v[i][W-1]&&g[i][W-1]==\'.\')bfs(i,W-1);}for(int j=0;j<W;j++){if(!v[0][j]&&g[0][j]==\'.\')bfs(0,j);if(!v[H-1][j]&&g[H-1][j]==\'.\')bfs(H-1,j);}int ans=0;for(int i=0;i<H;i++)for(int j=0;j<W;j++)if(!v[i][j]&&g[i][j]==\'.\'){bfs(i,j);ans++;}System.out.println(ans);}\n}'
    }
  },
  {
    id:'pex_08',year:0,num:0,title:'ナップサック問題',points:6,diff:3,cat:'dp',
    tags:['動的計画法','ナップサック'],
    desc:'N個の荷物（重さw[i]、価値v[i]）と容量W。価値の和の最大値を求めよ。',
    inputDesc:'1行目にN, W(1≤N≤100, 1≤W≤10000)。続くN行にw[i], v[i]。',
    outputDesc:'最大価値。',
    examples:[{input:'3 10\n5 10\n4 8\n3 6',output:'16'}],
    hints:['dp[j]=重さj以内で実現できる最大価値。','各荷物iについて、j=W..w[i]の逆順ループ。','dp[j]=max(dp[j], dp[j-w[i]]+v[i])で更新。'],
    template:{
      c:'#include <stdio.h>\nlong long dp[10005];\nint main(){\n    int n,W; scanf("%d %d",&n,&W);\n    for(int i=0;i<n;i++){\n        int w,v; scanf("%d %d",&w,&v);\n        for(int j=W;j>=w;j--)\n            if(dp[j-w]+v>dp[j]) dp[j]=dp[j-w]+v;\n    }\n    printf("%lld\\n",dp[W]);\n    return 0;\n}',
      cpp:'#include<bits/stdc++.h>\nusing namespace std;\nint main(){int n,W;cin>>n>>W;vector<long long>dp(W+1,0);for(int i=0;i<n;i++){int w,v;cin>>w>>v;for(int j=W;j>=w;j--)dp[j]=max(dp[j],dp[j-w]+v);}cout<<dp[W]<<endl;}',
      python:'n,W=map(int,input().split())\ndp=[0]*(W+1)\nfor _ in range(n):\n    w,v=map(int,input().split())\n    for j in range(W,w-1,-1):\n        dp[j]=max(dp[j],dp[j-w]+v)\nprint(dp[W])',
      java:'import java.util.Scanner;\npublic class Main{\n    public static void main(String[]a){\n        Scanner sc=new Scanner(System.in);int n=sc.nextInt(),W=sc.nextInt();\n        long[]dp=new long[W+1];\n        for(int i=0;i<n;i++){int w=sc.nextInt(),v=sc.nextInt();for(int j=W;j>=w;j--)dp[j]=Math.max(dp[j],dp[j-w]+v);}\n        System.out.println(dp[W]);\n    }\n}'
    }
  },
  {
    id:'pex_09',year:0,num:0,title:'コイン問題（最少枚数）',points:5,diff:3,cat:'dp',
    tags:['動的計画法','DP'],
    desc:'N種類のコイン（無限枚）でちょうどX円を作る最少コイン枚数を求めよ。',
    inputDesc:'1行目にN, X。2行目にN種のコイン。', outputDesc:'最少枚数（作れなければ-1）。',
    examples:[{input:'3 11\n1 3 5',output:'3'},{input:'2 3\n2 4',output:'-1'}],
    hints:['dp[i]=i円を作る最少枚数（dp[0]=0、他はINF）。','各コインcについてdp[i]=min(dp[i],dp[i-c]+1)で更新。'],
    template:{
      c:'#include <stdio.h>\n#define INF 1000000\nint dp[10005];\nint main(){\n    int n,x; scanf("%d %d",&n,&x);\n    int c[20]; for(int i=0;i<n;i++) scanf("%d",&c[i]);\n    for(int i=1;i<=x;i++) dp[i]=INF;\n    for(int i=1;i<=x;i++)\n        for(int j=0;j<n;j++)\n            if(c[j]<=i && dp[i-c[j]]+1<dp[i])\n                dp[i]=dp[i-c[j]]+1;\n    printf("%d\\n",dp[x]==INF?-1:dp[x]);\n    return 0;\n}',
      cpp:'#include<bits/stdc++.h>\nusing namespace std;\nint main(){int n,x;cin>>n>>x;vector<int>c(n);for(auto&v:c)cin>>v;vector<int>dp(x+1,(int)1e9);dp[0]=0;for(int i=1;i<=x;i++)for(int coin:c)if(coin<=i&&dp[i-coin]+1<dp[i])dp[i]=dp[i-coin]+1;cout<<(dp[x]>=(int)1e9?-1:dp[x])<<endl;}',
      python:'n,x=map(int,input().split())\nc=list(map(int,input().split()))\ndp=[float(\'inf\')]*(x+1);dp[0]=0\nfor i in range(1,x+1):\n    for coin in c:\n        if coin<=i and dp[i-coin]+1<dp[i]:dp[i]=dp[i-coin]+1\nprint(-1 if dp[x]==float(\'inf\') else dp[x])',
      java:'import java.util.*;\npublic class Main{\n    public static void main(String[]a){\n        Scanner sc=new Scanner(System.in);int n=sc.nextInt(),x=sc.nextInt();\n        int[]c=new int[n];for(int i=0;i<n;i++)c[i]=sc.nextInt();\n        int[]dp=new int[x+1];Arrays.fill(dp,Integer.MAX_VALUE/2);dp[0]=0;\n        for(int i=1;i<=x;i++)for(int coin:c)if(coin<=i&&dp[i-coin]+1<dp[i])dp[i]=dp[i-coin]+1;\n        System.out.println(dp[x]>=Integer.MAX_VALUE/2?-1:dp[x]);\n    }\n}'
    }
  },
  {
    id:'pex_10',year:0,num:0,title:'グラフの連結判定',points:5,diff:3,cat:'graph',
    tags:['Union-Find','連結判定'],
    desc:'N頂点M辺の無向グラフで2頂点u,vが連結かQ個のクエリに答えよ。',
    inputDesc:'1行目にN,M。続くM行にa,b（辺）。続く1行にQ。続くQ行にu,v。',
    outputDesc:'各クエリに"Yes"/"No"。',
    examples:[{input:'4 3\n1 2\n2 3\n3 4\n2\n1 4\n1 3',output:'Yes\nYes'}],
    hints:['Union-Find（素集合データ構造）を使う。','find(x): xの根を返す。unite(a,b): グループを合流。','同じ根を持つ2点は連結。'],
    template:{
      c:'#include <stdio.h>\nint par[100005];\nint find(int x){return par[x]==x?x:par[x]=find(par[x]);}\nvoid unite(int a,int b){par[find(a)]=find(b);}\nint main(){\n    int n,m; scanf("%d %d",&n,&m);\n    for(int i=1;i<=n;i++) par[i]=i;\n    for(int i=0;i<m;i++){int a,b;scanf("%d %d",&a,&b);unite(a,b);}\n    int q; scanf("%d",&q);\n    while(q--){int u,v;scanf("%d %d",&u,&v);printf(find(u)==find(v)?"Yes\\n":"No\\n");}\n    return 0;\n}',
      cpp:'#include<bits/stdc++.h>\nusing namespace std;\nint p[100005];\nint f(int x){return p[x]==x?x:p[x]=f(p[x]);}\nint main(){int n,m;cin>>n>>m;iota(p,p+n+1,0);while(m--){int a,b;cin>>a>>b;p[f(a)]=f(b);}int q;cin>>q;while(q--){int u,v;cin>>u>>v;cout<<(f(u)==f(v)?"Yes":"No")<<endl;}}',
      python:'import sys;input=sys.stdin.readline\nn,m=map(int,input().split())\np=list(range(n+1))\ndef find(x):\n    while p[x]!=x:p[x]=p[p[x]];x=p[x]\n    return x\nfor _ in range(m):a,b=map(int,input().split());p[find(a)]=find(b)\nq=int(input())\nfor _ in range(q):u,v=map(int,input().split());print("Yes"if find(u)==find(v)else"No")',
      java:'import java.util.*;\npublic class Main{\n    static int[]p;\n    static int f(int x){return p[x]==x?x:(p[x]=f(p[x]));}\n    public static void main(String[]a){\n        Scanner sc=new Scanner(System.in);int n=sc.nextInt(),m=sc.nextInt();\n        p=new int[n+1];for(int i=0;i<=n;i++)p[i]=i;\n        for(int i=0;i<m;i++){int x=sc.nextInt(),y=sc.nextInt();p[f(x)]=f(y);}\n        int q=sc.nextInt();\n        while(q-->0){int u=sc.nextInt(),v=sc.nextInt();System.out.println(f(u)==f(v)?"Yes":"No");}\n    }\n}'
    }
  },
  {
    id:'pex_11',year:0,num:0,title:'二分探索',points:4,diff:3,cat:'greedy',
    tags:['二分探索','探索'],
    desc:'ソート済みN個の整数からターゲットTが存在するか判定せよ。',
    inputDesc:'1行目にN。2行目にN個のソート済み整数。3行目にT。',
    outputDesc:'"Found"または"NotFound"。',
    examples:[{input:'5\n1 3 5 7 9\n5',output:'Found'},{input:'5\n1 3 5 7 9\n4',output:'NotFound'}],
    hints:['lo=0, hi=n-1から始め、mid=(lo+hi)/2を繰り返す。','a[mid]==T→Found、a[mid]<T→lo=mid+1。'],
    template:{
      c:'#include <stdio.h>\nint main(){\n    int n; scanf("%d",&n);\n    int a[100000]; for(int i=0;i<n;i++) scanf("%d",&a[i]);\n    int t; scanf("%d",&t);\n    int lo=0,hi=n-1,found=0;\n    while(lo<=hi){\n        int mid=(lo+hi)/2;\n        if(a[mid]==t){found=1;break;}\n        else if(a[mid]<t) lo=mid+1;\n        else hi=mid-1;\n    }\n    printf(found?"Found\\n":"NotFound\\n");\n    return 0;\n}',
      cpp:'#include<bits/stdc++.h>\nusing namespace std;\nint main(){int n;cin>>n;vector<int>a(n);for(auto&x:a)cin>>x;int t;cin>>t;cout<<(binary_search(a.begin(),a.end(),t)?"Found":"NotFound")<<endl;}',
      python:'import bisect\nn=int(input())\na=list(map(int,input().split()))\nt=int(input())\ni=bisect.bisect_left(a,t)\nprint("Found"if i<n and a[i]==t else"NotFound")',
      java:'import java.util.*;\npublic class Main{\n    public static void main(String[]a){\n        Scanner sc=new Scanner(System.in);int n=sc.nextInt();\n        int[]arr=new int[n];for(int i=0;i<n;i++)arr[i]=sc.nextInt();\n        int t=sc.nextInt(),lo=0,hi=n-1;boolean f=false;\n        while(lo<=hi){int mid=(lo+hi)/2;if(arr[mid]==t){f=true;break;}else if(arr[mid]<t)lo=mid+1;else hi=mid-1;}\n        System.out.println(f?"Found":"NotFound");\n    }\n}'
    }
  },
  /* ===== ★★★★上級 diff:4 ===== */
  {
    id:'p2025_4',year:2025,num:4,title:'超高速通信',points:4,diff:4,cat:'graph',
    tags:['全ペア判定','座標'],
    desc:'公民館iからjへの通信はxi-xj≥yi-yj のときのみ可能。全公民館へ送信できる公民館を列挙せよ。',
    inputDesc:'1行目にN(2≤N≤1000)。続くN行にxi, yi。',
    outputDesc:'1行目に台数。2行目以降に番号を昇順。',
    examples:[{input:'3\n5 -2\n7 -3\n4 -6',output:'2\n2\n3'},{input:'4\n5 10\n8 11\n2 7\n3 5',output:'1\n4'}],
    hints:['全ペア(i,j)についてxi-xj≥yi-yjを確認。','iから自分以外の全jへ送信できれば条件を満たす。'],
    template:{
      c:'#include <stdio.h>\nint main(){\n    int n; scanf("%d",&n);\n    int x[1000],y[1000];\n    for(int i=0;i<n;i++) scanf("%d %d",&x[i],&y[i]);\n    int cnt=0,ans[1000];\n    for(int i=0;i<n;i++){\n        int ok=1;\n        for(int j=0;j<n;j++){\n            if(i==j)continue;\n            if(x[i]-x[j]<y[i]-y[j]){ok=0;break;}\n        }\n        if(ok) ans[cnt++]=i+1;\n    }\n    printf("%d\\n",cnt);\n    for(int i=0;i<cnt;i++) printf("%d\\n",ans[i]);\n    return 0;\n}',
      cpp:'#include<bits/stdc++.h>\nusing namespace std;\nint main(){int n;cin>>n;vector<int>x(n),y(n);for(int i=0;i<n;i++)cin>>x[i]>>y[i];vector<int>ans;for(int i=0;i<n;i++){bool ok=true;for(int j=0;j<n;j++)if(i!=j&&x[i]-x[j]<y[i]-y[j]){ok=false;break;}if(ok)ans.push_back(i+1);}cout<<ans.size()<<endl;for(int v:ans)cout<<v<<endl;}',
      python:'n=int(input())\nxy=[list(map(int,input().split()))for _ in range(n)]\nans=[i+1 for i in range(n) if all(xy[i][0]-xy[j][0]>=xy[i][1]-xy[j][1]for j in range(n)if i!=j)]\nprint(len(ans))\nfor v in ans:print(v)',
      java:'import java.util.*;\npublic class Main{\n    public static void main(String[]a){\n        Scanner sc=new Scanner(System.in);int n=sc.nextInt();\n        int[]x=new int[n],y=new int[n];\n        for(int i=0;i<n;i++){x[i]=sc.nextInt();y[i]=sc.nextInt();}\n        List<Integer>ans=new ArrayList<>();\n        for(int i=0;i<n;i++){boolean ok=true;for(int j=0;j<n;j++)if(i!=j&&x[i]-x[j]<y[i]-y[j]){ok=false;break;}if(ok)ans.add(i+1);}\n        System.out.println(ans.size());for(int v:ans)System.out.println(v);\n    }\n}'
    }
  },
  {
    id:'pex_12',year:0,num:0,title:'ダイクストラ法',points:8,diff:4,cat:'graph',
    tags:['ダイクストラ','最短経路'],
    desc:'N頂点M辺の重み付きグラフで、頂点1から各頂点への最短距離を求めよ。',
    inputDesc:'1行目にN,M。続くM行にa,b,c（辺と重み）。',
    outputDesc:'頂点1〜Nへの最短距離（到達不能なら-1）。',
    examples:[{input:'4 5\n1 2 2\n1 3 5\n2 3 1\n2 4 4\n3 4 2',output:'0\n2\n3\n5'}],
    hints:['dist[]をINFで初期化しdist[1]=0から開始。','未確定で最小distのvを選び、その隣接を緩和する。'],
    template:{
      c:'#include <stdio.h>\n#define MX 1005\ntypedef long long ll;\nll dist[MX],w[MX][MX];int vis[MX],adj[MX][MX],n,m;\nvoid dijk(){\n    for(int i=1;i<=n;i++){dist[i]=(ll)1e18;vis[i]=0;}\n    dist[1]=0;\n    for(int it=0;it<n;it++){\n        int v=-1;\n        for(int i=1;i<=n;i++) if(!vis[i]&&(v==-1||dist[i]<dist[v]))v=i;\n        if(v==-1||dist[v]==(ll)1e18)break;\n        vis[v]=1;\n        for(int u=1;u<=n;u++) if(adj[v][u]&&dist[v]+w[v][u]<dist[u])dist[u]=dist[v]+w[v][u];\n    }\n}\nint main(){\n    scanf("%d %d",&n,&m);\n    for(int i=0;i<m;i++){int a,b;ll c;scanf("%d %d %lld",&a,&b,&c);adj[a][b]=adj[b][a]=1;w[a][b]=w[b][a]=c;}\n    dijk();\n    for(int i=1;i<=n;i++) printf("%lld\\n",dist[i]==(ll)1e18?-1:dist[i]);\n    return 0;\n}',
      cpp:'#include<bits/stdc++.h>\nusing namespace std;\ntypedef pair<long long,int>P;\nconst long long INF=1e18;\nint main(){int n,m;cin>>n>>m;vector<vector<pair<int,long long>>>g(n+1);while(m--){int a,b;long long c;cin>>a>>b>>c;g[a].push_back({b,c});g[b].push_back({a,c});}vector<long long>d(n+1,INF);priority_queue<P,vector<P>,greater<P>>pq;d[1]=0;pq.push({0,1});while(!pq.empty()){auto[dd,v]=pq.top();pq.pop();if(dd>d[v])continue;for(auto[u,c]:g[v])if(d[v]+c<d[u]){d[u]=d[v]+c;pq.push({d[u],u});}}for(int i=1;i<=n;i++)cout<<(d[i]==INF?-1:d[i])<<endl;}',
      python:'import heapq\nfrom math import inf\nn,m=map(int,input().split())\ng=[[]for _ in range(n+1)]\nfor _ in range(m):\n    a,b,c=map(int,input().split())\n    g[a].append((c,b));g[b].append((c,a))\nd=[inf]*(n+1);d[1]=0\npq=[(0,1)]\nwhile pq:\n    dd,v=heapq.heappop(pq)\n    if dd>d[v]:continue\n    for c,u in g[v]:\n        if d[v]+c<d[u]:d[u]=d[v]+c;heapq.heappush(pq,(d[u],u))\nfor i in range(1,n+1):print(-1 if d[i]==inf else d[i])',
      java:'import java.util.*;\npublic class Main{\n    public static void main(String[]a){\n        Scanner sc=new Scanner(System.in);int n=sc.nextInt(),m=sc.nextInt();\n        List<List<long[]>>g=new ArrayList<>();for(int i=0;i<=n;i++)g.add(new ArrayList<>());\n        for(int i=0;i<m;i++){int x=sc.nextInt(),y=sc.nextInt();long c=sc.nextLong();g.get(x).add(new long[]{y,c});g.get(y).add(new long[]{x,c});}\n        long[]d=new long[n+1];Arrays.fill(d,Long.MAX_VALUE/2);d[1]=0;\n        PriorityQueue<long[]>pq=new PriorityQueue<>(Comparator.comparingLong(x->x[0]));\n        pq.offer(new long[]{0,1});\n        while(!pq.isEmpty()){long[]p=pq.poll();int v=(int)p[1];if(p[0]>d[v])continue;for(long[]e:g.get(v))if(d[v]+e[1]<d[(int)e[0]]){d[(int)e[0]]=d[v]+e[1];pq.offer(new long[]{d[(int)e[0]],e[0]});}}\n        for(int i=1;i<=n;i++)System.out.println(d[i]==Long.MAX_VALUE/2?-1:d[i]);\n    }\n}'
    }
  },
  {
    id:'pex_13',year:0,num:0,title:'LIS（最長増加部分列）',points:8,diff:4,cat:'dp',
    tags:['動的計画法','LIS','二分探索'],
    desc:'N個の整数からなる数列の最長増加部分列(LIS)の長さを求めよ。',
    inputDesc:'1行目にN(1≤N≤10^5)。2行目にN個の整数。', outputDesc:'LISの長さ。',
    examples:[{input:'8\n5 1 4 2 8 3 6 7',output:'4'},{input:'5\n1 2 3 4 5',output:'5'}],
    hints:['O(N log N): dp配列を管理し各要素で二分探索。','dp[i]=長さi+1のLISの末尾の最小値。'],
    template:{
      c:'#include <stdio.h>\n#define MX 100005\nint dp[MX],sz=0;\nint lb(int*arr,int n,int val){int lo=0,hi=n;while(lo<hi){int mid=(lo+hi)/2;if(arr[mid]<val)lo=mid+1;else hi=mid;}return lo;}\nint main(){\n    int n; scanf("%d",&n);\n    for(int i=0;i<n;i++){int x;scanf("%d",&x);int pos=lb(dp,sz,x);dp[pos]=x;if(pos==sz)sz++;}\n    printf("%d\\n",sz);\n    return 0;\n}',
      cpp:'#include<bits/stdc++.h>\nusing namespace std;\nint main(){int n;cin>>n;vector<int>dp;for(int i=0;i<n;i++){int x;cin>>x;auto it=lower_bound(dp.begin(),dp.end(),x);if(it==dp.end())dp.push_back(x);else *it=x;}cout<<dp.size()<<endl;}',
      python:'import bisect\nn=int(input())\na=list(map(int,input().split()))\ndp=[]\nfor x in a:\n    i=bisect.bisect_left(dp,x)\n    if i==len(dp):dp.append(x)\n    else:dp[i]=x\nprint(len(dp))',
      java:'import java.util.*;\npublic class Main{\n    public static void main(String[]a){\n        Scanner sc=new Scanner(System.in);int n=sc.nextInt();\n        List<Integer>dp=new ArrayList<>();\n        for(int i=0;i<n;i++){int x=sc.nextInt();int pos=Collections.binarySearch(dp,x);if(pos<0)pos=-(pos+1);if(pos==dp.size())dp.add(x);else dp.set(pos,x);}\n        System.out.println(dp.size());\n    }\n}'
    }
  },
  {
    id:'pex_14',year:0,num:0,title:'区間スケジューリング',points:6,diff:4,cat:'greedy',
    tags:['貪欲法','スケジューリング'],
    desc:'N個の区間[s,e]から重ならない区間を最大個数選べ。',
    inputDesc:'1行目にN。続くN行にs, e。', outputDesc:'選べる最大個数。',
    examples:[{input:'5\n1 3\n2 5\n4 6\n5 8\n7 9',output:'3'}],
    hints:['終了時刻が早い順にソートし、貪欲に選ぶ。','前の終了時刻≤次の開始時刻なら選ぶ。'],
    template:{
      c:'#include <stdio.h>\n#include <stdlib.h>\ntypedef struct{int s,e;}Seg;\nint cmp(const void*a,const void*b){return ((Seg*)a)->e-((Seg*)b)->e;}\nint main(){\n    int n;scanf("%d",&n);\n    Seg seg[100005];\n    for(int i=0;i<n;i++) scanf("%d %d",&seg[i].s,&seg[i].e);\n    qsort(seg,n,sizeof(Seg),cmp);\n    int cnt=0,last=-1000000000;\n    for(int i=0;i<n;i++) if(seg[i].s>=last){cnt++;last=seg[i].e;}\n    printf("%d\\n",cnt);\n    return 0;\n}',
      cpp:'#include<bits/stdc++.h>\nusing namespace std;\nint main(){int n;cin>>n;vector<pair<int,int>>seg(n);for(auto&p:seg)cin>>p.second>>p.first;sort(seg.begin(),seg.end());int cnt=0,last=INT_MIN;for(auto[e,s]:seg)if(s>=last){cnt++;last=e;}cout<<cnt<<endl;}',
      python:'n=int(input())\nsegs=sorted([tuple(map(int,input().split()))for _ in range(n)],key=lambda x:x[1])\ncnt=0;last=float(\'-inf\')\nfor s,e in segs:\n    if s>=last:cnt+=1;last=e\nprint(cnt)',
      java:'import java.util.*;\npublic class Main{\n    public static void main(String[]a){\n        Scanner sc=new Scanner(System.in);int n=sc.nextInt();\n        int[][]seg=new int[n][2];\n        for(int i=0;i<n;i++){seg[i][0]=sc.nextInt();seg[i][1]=sc.nextInt();}\n        Arrays.sort(seg,Comparator.comparingInt(x->x[1]));\n        int cnt=0,last=Integer.MIN_VALUE;\n        for(int[]p:seg)if(p[0]>=last){cnt++;last=p[1];}\n        System.out.println(cnt);\n    }\n}'
    }
  }
];
