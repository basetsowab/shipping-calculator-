#include <iostream>   // Baset Sowab 
using namespace std;  


// for weight calculation
// I put 5 dollars per pound is being charged

double calculateCost(double weight)
{
    return weight * 5;   
}


// calculates weight and distance
// for every mile I decided to charge 50 cents extra

double calculateCost(double weight, double distance)
{
    return (weight * 5) + (distance * 0.5);  
}


// calulates the things for express shipping
// following all the other calculations I put 10 dollars extra for express because this is similar what ups charges
double calculateCost(double weight, double distance, bool express)
{
    double cost = (weight * 5) + (distance * 0.5);

    if (express)
    {
        cost = cost + 10;   
    }

    return cost;
}


// Main function where it calulates the price value of the packages

int main()
{
    int choice;
    double weight, distance;
    char expressChoice;

    cout << "Lets Calculate your delivery price" << endl;
    cout << "Choose the option that is best for you " << endl;
    cout << "For Weight only type 1" << endl;
    cout << "For Weight and distance type 2" << endl;
    cout << "For Weight, distance, and express type 3" << endl;
    cin >> choice;

    if (choice == 1)
    {
        cout << "Enter weight (lb): ";
        cin >> weight;

        cout << "Total cost: $" << calculateCost(weight) << endl;
        cout << " Thank you and happy shipping " << endl;
    }
    else if (choice == 2)
    {
        cout << "Enter weight (lb): ";
        cin >> weight;

        cout << "Enter distance (miles): ";
        cin >> distance;

        cout << "Total cost: $" << calculateCost(weight, distance) << endl;
        cout << "Thank you and happy shipping " << endl;
    }
    else if (choice == 3)
    {
        cout << "Enter weight (lb): ";
        cin >> weight;

        cout << "Enter distance (miles): ";
        cin >> distance;

        cout << "Express delivery? Yes or NO : ";
        cout << "If Yes type y and If No type n";
        cin >> expressChoice;

        bool express = false;

        if (expressChoice == 'y' || expressChoice == 'Y')
        {
            express = true;
        }

        cout << "Total cost: $" << calculateCost(weight, distance, express) << endl;
        cout << "Thank you and happy shipping " << endl;
    }
    else
    {
        cout << "Invalid option." << endl;
    }

    return 0;  
}
