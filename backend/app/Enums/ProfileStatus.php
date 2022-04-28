<?php

namespace App\Enums;

use BenSampo\Enum\Enum;

/**
 * @method static static OptionOne()
 * @method static static OptionTwo()
 * @method static static OptionThree()
 */
final class ProfileStatus extends Enum
{
    const STATUS1 =   'PENDING';
    const STATUS2 =   'PROCESSING';
    const STATUS3 = 'DONE';
    const REJECT = 'REJECT';
}
