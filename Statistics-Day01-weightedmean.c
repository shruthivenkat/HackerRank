#include <stdio.h>
#include <string.h>
#include <math.h>
#include <stdlib.h>

int main() {
int i,n;
    scanf("%d",&n);
    int x[n],w[n];
    double mean,add;
    for(i=0;i<n;i++)
    {
        scanf("%d",&x[i]);
    }
    for(i=0;i<n;i++)
    {
        scanf("%d",&w[i]);
    }
    for(i=0;i<n;i++)
    {
        mean+=(x[i]*w[i]);
        add+=w[i];
    }
    mean=mean/add;
    printf("%.1f",mean);
    
}