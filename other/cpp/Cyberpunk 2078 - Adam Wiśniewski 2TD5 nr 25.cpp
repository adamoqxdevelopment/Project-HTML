#include <cstdlib>
#include <ctime>
#include <iostream>
using namespace std;

int main() 
{
    int liczba, a, czesc = 1;
    srand(time(NULL));
	liczba=rand()%(10+1);
    cout<<"Witaj w swiecie Cyberpunk 2078!"<<endl;
    cout<<"Przed Toba 6 dziesieciopietrowych budynkow"<<endl;
    cout<<"W kazdym z nich znajduje sie jedna czesc Twojego Cyberszkieletu"<<endl;
    cout<<"Czy zdobedziesz je wszystkie?"<<endl;
    cout<<endl;
    do {
		cout<<endl;
        cout<<"Na ktore pietro chcesz wejsc w tym budynku?"<<endl;
        cin>>a;
        if (liczba==a) {
            cout<<"Brawo znalazles jedna z czesci, masz ich juz "<<czesc<<endl;
            czesc++;
            srand(time(NULL));
	    	liczba=rand()%(10+1);
        }
        else 
        {
            if (liczba<a) {
                cout<<"Czesc w tym budynku jest o kilka pieter nizej"<<endl;
            }
            else
            cout<<"Czesc w tym budynku jest o kilka pieter wyzej"<<endl;
            cout<<endl;
        cout<<"sprobuj ponownie"<<endl;
		cout<<endl; 
		if (czesc==7){
			cout<<endl;
			cout<<endl;
			cout<<"Dzieki za gre Copyright  USB Project Red";
            cin>>a;
		}}
    } while (czesc!=7);
    return 0;

        
}

