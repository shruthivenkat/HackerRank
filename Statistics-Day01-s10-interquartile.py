n = int(input())
a = list(map(int,input().split()))
f = list(map(int,input().split()))
l  = list()
for i in range(0,n):
    for j in range(0,f[i]):
        l.append(a[i])
l.sort()
n = len(l)

if(n%2==0):
    q2 = round(((l[int(n/2)] + l[int((n/2))-1])/2),1)
else:
    q2 = l[int(n/2)]
    
if(int((n/2))%2!=0):
    q1 = l[int(n/4)]
else:
    q1 = round(((l[int(n/4)] + l[int(n/4) - 1])/2),1)

if(int((n/2))%2!=0):
    q3 = l[int(n/2) + int(n/4) + 1]
else:
    if(n%2!=0):
        q3 = round(((l[int(n/2)+int(n/4)] + l[int(n/2)+int(n/4)+1])/2),1)
    else:
        q3 = round(int((l[int(n/2)+int(n/4)] + l[int(n/2)+int(n/4)-1])/2),1)

print(round(float((q3-q1)),1))