# for weight calculation
# I put 5 dollars per pound is being charged

# calculates weight and distance
# for every mile I decided to charge 50 cents extra

# calulates the things for express shipping
# following all the other calculations I put 10 dollars extra for express because this is similar what ups charges

def calculateCost(weight, distance=None, express=None):

    if distance is None and express is None:
        return weight * 5

    if distance is not None and express is None:
        return (weight * 5) + (distance * 0.5)

    if distance is not None and express is not None:
        cost = (weight * 5) + (distance * 0.5)

        if express:
            cost += 10

        return cost

    return "Invalid input combination"


# Main function where it calulates the price value of the packages

def main():

    print("Lets Calculate your delivery price")
    print("Choose the option that is best for you ")
    print("For Weight only type 1")
    print("For Weight and distance type 2")
    print("For Weight, distance, and express type 3")

    choice = input("")

    if choice == "1":
        weight = float(input("Enter weight (lb): "))
        print("Total cost: $", calculateCost(weight))
        print("Thank you and happy shipping ")

    elif choice == "2":
        weight = float(input("Enter weight (lb): "))
        distance = float(input("Enter distance (miles): "))
        print("Total cost: $", calculateCost(weight, distance))
        print("Thank you and happy shipping ")

    elif choice == "3":
        weight = float(input("Enter weight (lb): "))
        distance = float(input("Enter distance (miles): "))
        print("Express delivery? Yes or NO : ")
        express_input = input("If Yes type y and If No type n")

        express = (express_input.lower() == "y")

        print("Total cost: $", calculateCost(weight, distance, express))
        print("Thank you and happy shipping ")

    else:
        print("Invalid option.")


if __name__ == "__main__":
    main()