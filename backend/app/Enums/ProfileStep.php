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
    const NEWS = "NEWS";
    const TEST =   "TEST";
    const INTERVIEW = "INTERVIEW";
    const CONFIRM = "CONFIRM";
    const CONSIDER = "CONSIDER";
    const EMPLOYEE =   "EMPLOYEE";
    const REJECT = "REJECT";
}
