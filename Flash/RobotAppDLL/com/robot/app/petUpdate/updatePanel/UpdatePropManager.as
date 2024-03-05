package com.robot.app.petUpdate.updatePanel
{
   import com.robot.core.info.pet.PetInfo;
   import com.robot.core.info.pet.update.UpdatePropInfo;
   import flash.events.Event;
   
   public class UpdatePropManager
   {
      
      private static var _newInfo:UpdatePropInfo;
      
      private static var _oldInfo:PetInfo;
      
      private static var _fun:Function;
       
      
      public function UpdatePropManager()
      {
         super();
      }
      
      public static function update(param1:UpdatePropInfo, param2:PetInfo, param3:Function, param4:Boolean = false) : void
      {
         _fun = param3;
         _newInfo = param1;
         _oldInfo = param2;
         if(_newInfo.level > _oldInfo.level || param4)
         {
            if(param4 && _newInfo.level <= _oldInfo.level)
            {
               if(_fun != null)
               {
                  _fun();
               }
            }
            else
            {
               updateLevel();
            }
         }
         else if(_fun != null)
         {
            _fun();
         }
      }
      
      private static function updateLevel() : void
      {
         LevelUpAndNewSkillController.instance.showLvUp(_newInfo,_oldInfo,_fun);
      }
      
      private static function updateLevelCloseHandler(param1:Event) : void
      {
         if(_fun != null)
         {
            _fun();
         }
      }
   }
}
