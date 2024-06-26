import { expect, test } from "vitest";

import  addItemToLocalStorage from '../utils/storage';


describe('addItemToLocalStorage Function', () => {
  beforeEach(() => {
    // Mock localStorage methods
    const localStorageMock = (() => {
      let store = {};

      return {
        getItem: key => store[key],
        setItem: (key, value) => {
          store[key] = value.toString();
        },
        clear: () => {
          store = {};
        }
      };
    })();

    Object.defineProperty(window, 'localStorage', {
      value: localStorageMock
    });
  });

  test('adds a new trip plan to local storage', async () => {
    const newTripPlan = {
      tripPlan: 'Sample trip plan',
      searchCondition: {
        numberOfDays: 5,
        city: 'Sample City'
      }
    };

    // Call the function
    await addItemToLocalStorage(newTripPlan);

    // Retrieve the stored trip plans from local storage
    const storedTripPlansJSON = localStorage.getItem('mytrips');
    const storedTripPlans = JSON.parse(storedTripPlansJSON);

    // Assert that the new trip plan is added to local storage
    expect(storedTripPlans.length).toBe(1);
    expect(storedTripPlans[0]).toEqual(newTripPlan);
  });
});
