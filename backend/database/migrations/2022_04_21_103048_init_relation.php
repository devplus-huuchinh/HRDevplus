<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        // user-role (1-N)
        Schema::table('users', function (Blueprint $table) {
            $table->foreign('role_id')->references('id')->on('roles')->onUpdate('cascade')->onDelete('cascade');
        });
        //  user-campaign (1-N)
        Schema::table('campaigns', function (Blueprint $table) {
            $table->foreign('user_id')->references('id')->on('users')->onUpdate('cascade')->onDelete('cascade');
        });
        // campaign-profile  && position profile  (1-N)
        Schema::table('profiles', function (Blueprint $table) {
            $table->foreign('campaign_id')->references('id')->on('campaigns')->onUpdate('cascade')->onDelete('cascade');
            $table->foreign('position_id')->references('id')->on('positions')->onUpdate('cascade')->onDelete('cascade');
        });
        // Campaign-position_campaign && Position-position_campaign
        Schema::table('position_campaigns', function (Blueprint $table) {
            $table->foreign('campaign_id')->references('id')->on('campaigns')->onUpdate('cascade')->onDelete('cascade');
            $table->foreign('position_id')->references('id')->on('positions')->onUpdate('cascade')->onDelete('cascade');
        });
        // technique-profile_technique && profile-profile_technique
        Schema::table('profile_techniques', function (Blueprint $table) {
            $table->foreign('profile_id')->references('id')->on('profiles')->onUpdate('cascade')->onDelete('cascade');
            $table->foreign('technique_id')->references('id')->on('techniques')->onUpdate('cascade')->onDelete('cascade');
        });
        // campaign-campaign_technique && technique-campaign_technique
        Schema::table('campaign_techniques', function (Blueprint $table) {
            $table->foreign('campaign_id')->references('id')->on('campaigns')->onUpdate('cascade')->onDelete('cascade');
            $table->foreign('technique_id')->references('id')->on('techniques')->onUpdate('cascade')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        // user-role (1-N)
        Schema::table('users', function (Blueprint $table) {
            $table->dropForeign(['role_id']);
        });
        //  user-campaign (1-N)
        Schema::table('campaigns', function (Blueprint $table) {
            $table->dropForeign(['user_id']);
        });
        // campaign-profile  && position profile  (1-N)
        Schema::table('profiles', function (Blueprint $table) {
            $table->dropForeign(['campaign_id']);
            $table->dropForeign(['position_id']);
        });
        // Campaign-position_campaign && Position-position_campaign
        Schema::table('position_campaigns', function (Blueprint $table) {
            $table->dropForeign(['campaign_id']);
            $table->dropForeign(['position_id']);
        });
        // technique-profile_technique && profile-profile_technique
        Schema::table('profile_techniques', function (Blueprint $table) {
            $table->dropForeign(['profile_id']);
            $table->dropForeign(['technique_id']);
        });
        // campaign-campaign_technique && technique-campaign_technique
        Schema::table('campaign_techniques', function (Blueprint $table) {
            $table->dropForeign(['campaign_id']);
            $table->dropForeign(['technique_id']);
        });
    }
};
