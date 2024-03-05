package com.robot.core.controller
{
   import com.robot.core.info.pet.PetInfo;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alert;
   
   public class ShowNewPetController
   {
      
      private static var moduleName:String = "PetGetMainPanel";
      
      private static var arr:Array = [];
      
      private static var hasOpened:Boolean = false;
       
      
      public function ShowNewPetController()
      {
         super();
      }
      
      public static function openNewPetModule(param1:PetInfo, param2:uint) : void
      {
         var petInfo:PetInfo = param1;
         var len:uint = param2;
         if(petInfo.id == 3243)
         {
            ModuleManager.showAppModule("AmirComBodyToBestPanel");
            return;
         }
         if(petInfo.id == 3217)
         {
            ModuleManager.showAppModule("EvilHadesPowerUpPanel");
            return;
         }
         if(petInfo.id == 3170 || petInfo.id == 3190)
         {
            return;
         }
         if(petInfo.id == 3102)
         {
            ModuleManager.showAppModule("RuiersiCompleteUPPanel");
            return;
         }
         if(petInfo.id == 3133)
         {
            ModuleManager.showAppModule("XieyanmojunUpPanel");
            return;
         }
         if(petInfo.id == 3142)
         {
            ModuleManager.showAppModule("ElectricalKingToBestPanel","ElectricalKingEhancePanel");
            return;
         }
         if(petInfo.id == 3214)
         {
            ModuleManager.showAppModule("WersikeupPanel");
            return;
         }
         if(petInfo.id == 3224)
         {
            return;
         }
         if(petInfo.id == 3261)
         {
            return;
         }
         if(petInfo.id == 3273)
         {
            return;
         }
         if(petInfo.id == 3282)
         {
            return;
         }
         if(petInfo.id == 3332)
         {
            return;
         }
         if(petInfo.id == 3348)
         {
            return;
         }
         if(petInfo.id == 3355)
         {
            return;
         }
         if(petInfo.id == 3364)
         {
            return;
         }
         if(petInfo.id == 3372)
         {
            return;
         }
         if(petInfo.id == 3378)
         {
            SocketConnection.sendWithCallback(46331,null,1,petInfo.catchTime);
            Alert.show("你的双属性精灵王还没有获得能力提升，是否前往获得？",function():void
            {
               ModuleManager.showAppModule("MysteriousFightSpritePowerUpPanel");
            });
            return;
         }
         if(petInfo.id == 3393)
         {
            ModuleManager.showAppModule("MachineELFKINGJpPanel");
            return;
         }
         arr.push({
            "_petInfo":petInfo,
            "_len":len
         });
         checkModuleIsOpened();
      }
      
      public static function checkModuleIsOpened() : void
      {
         var _loc2_:Object = null;
         var _loc3_:Array = null;
      }
      
      public static function closeNewPetModule() : void
      {
      }
   }
}
