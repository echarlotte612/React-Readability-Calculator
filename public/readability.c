#import <stdio.h>
#import <cs50.h>
#import <ctype.h>
#import <string.h>
#import <math.h>

int count_letters(string text);
int count_words(string text);
int count_sentences(string text);

int main(void)
{
    // Ask user for input //
    string text = get_string("Text: ");

    // Count the number of letters and words in the input //
    int num_letters = count_letters(text);
    int num_words = count_words(text);
    int sentences = count_sentences(text);

    // Calculate average number of letters and sentences per 100 words //
    float L = 100 * ((float) num_letters / (float)num_words);
    float S = 100 * ((float)sentences / (float)num_words);

    // Get the grade level //
    float index = 0.0588 * L - 0.296 * S - 15.8;
    int grade = round(index);

    // Print the number of letters and words from the input //
    printf("%i letter(s)\n", num_letters);
    printf("%i word(s)\n", num_words);
    printf("%i sentence(s)\n", sentences);

    // Conditions for grades //
    if (index >= 16)
    {
        printf("Grade 16+\n");
    }
    else if (index < 1)
    {
        printf("Before Grade 1\n");
    }
    else
    {
        printf("Grade %i\n", grade);
    }
}

// FUNCTIONS //
// GET LETTERS COUNT //
int count_letters(string text)
{
    int num_letters = 0;
    // loops through each character for as long as the text is //
    for (int i = 0, length = strlen(text); i < length; i++)
    {
        // only adds a counter if the character is a letter. //
        if (isalpha(text[i]))
        {
            num_letters++;
        }
    }
    return num_letters;
}

// GET WORDS COUNT //
int count_words(string text)
{
    int num_words = 1;
    for (int i = 0, length = strlen(text); i < length; i++)
    {
        // only adds a counter if there is a space character //
        if (isspace(text[i]))
        {
            num_words++;
        }
    }
    return num_words;
}

// GET SENTENCES COUNT //
int count_sentences(string text)
{
    int sentences = 0;
    for (int i = 0, length = strlen(text); i < length; i++)
    {
        // Only adds a count if the character is an end point punctuation mark //
        if (text[i] == '.' || text[i] == '!' || text[i] == '?')
        {
            sentences++;
        }
    }
    return sentences;
}