#include<stdio.h>
int main()
{
    int count;
    int *a=(int *)malloc(sizeof(int )*5);
    int i;
    for(i=0;i<5;i++)
    {
        scanf("%d",&a[i]);
    }
    long sum=0;
    for(i=0;i<5;i++)
    {
        sum+=a[i];
    }
    long lowest=sum,new_lowest=0,highest=0;
     for(int j = 0; j < 5; j++)
    {
        long val = sum - a[j];
        
        if(val < lowest)
        {
            lowest = val;
            new_lowest = val;
        }
        if(val > highest) 
        {
            highest = val;
        }
    }
    
    printf("%ld %ld", new_lowest, highest);
    return 0;
}