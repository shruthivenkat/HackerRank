#include<stdio.h>
int main()
{
    int i,n;
    scanf("%d",&n);
    int arr[n];
    for(i=0;i<n;i++)
    {
        scanf("%d",&arr[i]);
    }
    int d,m,count=0;
    scanf("%d %d",&d,&m);
    int sum[n];int p;
   
    for(int i=0;i<n;i++)sum[i+1]=sum[i]+arr[i];
    for(int i=0;i<=n-m;i++){
        if(sum[i+m]-sum[i]==d){
            count++;
        }
    }
    printf("%d",count);
    
}