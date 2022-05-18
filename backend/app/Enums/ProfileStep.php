<?php

namespace App\Enums;

use BenSampo\Enum\Enum;

/**
 * @method static static OptionOne()
 * @method static static OptionTwo()
 * @method static static OptionThree()
 */
final class ProfileStep extends Enum
{
    const key1 = "NEW";
    const key2 = "TEST";
    const key3 = "INTERVIEW";
    const key4 = "CONFIRM";
    const key5 = "CONSIDER";
    const key6 = "EMPLOYEE";
}
