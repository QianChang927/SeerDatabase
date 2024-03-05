package com.robot.app.petUpdate.updatePanel
{
   import com.robot.app.panel.SkillReplacePanel;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.controller.NewSeerTaskController;
   import com.robot.core.info.pet.PetInfo;
   import com.robot.core.info.pet.update.UpdateSkillInfo;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.PetManager;
   import flash.events.Event;
   import org.taomee.utils.AlignType;
   import org.taomee.utils.DisplayUtil;
   
   public class UpdateSkillManager
   {
      
      private static var _info:UpdateSkillInfo;
      
      private static var _fun:Function;
      
      private static var _singlePanel:com.robot.app.petUpdate.updatePanel.SingleSkillPanel;
      
      private static var _isUpdateSkill:Boolean = false;
      
      private static var _petinfo:PetInfo;
       
      
      public function UpdateSkillManager()
      {
         super();
      }
      
      public static function update(param1:UpdateSkillInfo, param2:Function = null) : void
      {
         _info = param1;
         var _loc3_:PetInfo = PetManager.getPetInfo(_info.petCatchTime);
         if(_loc3_ == null)
         {
            return;
         }
         _petinfo = _loc3_;
         _fun = param2;
         execute();
      }
      
      private static function execute() : void
      {
         if(_info.activeSkills.length > 0)
         {
            if(NewSeerTaskController.isNewSeer)
            {
               return;
            }
            ModuleManager.showAppModule("PetSkillPanel",_petinfo);
         }
         else if(_info.unactiveSkills.length > 0)
         {
            if(NewSeerTaskController.isNewSeer)
            {
               return;
            }
            ModuleManager.showAppModule("PetSkillPanel",_petinfo);
         }
         else if(_fun != null)
         {
            _fun();
         }
      }
      
      private static function showSinglePanel() : void
      {
         if(_singlePanel == null)
         {
            _singlePanel = new com.robot.app.petUpdate.updatePanel.SingleSkillPanel();
            _singlePanel.addEventListener(Event.CLOSE,onCloseSingle);
         }
         var _loc1_:uint = uint(_info.activeSkills.shift());
         _singlePanel.setInfo(_info.petCatchTime,_loc1_,PetManager.getPetInfo(_info.petCatchTime) != null);
         MainManager.getStage().addChild(_singlePanel);
         DisplayUtil.align(_singlePanel,null,AlignType.MIDDLE_CENTER);
      }
      
      private static function onCloseSingle(param1:Event) : void
      {
         DisplayUtil.removeForParent(_singlePanel,false);
         execute();
      }
      
      private static function showMultiPanel() : void
      {
         var id:uint = uint(_info.unactiveSkills.shift());
         if(_info.unactiveSkills.length < 2)
         {
            SkillReplacePanel.show(_info.petCatchTime,id,function():void
            {
               execute();
            },function():void
            {
               execute();
            });
         }
         else
         {
            PetManager.storageUpDate(_info.petCatchTime,function(param1:PetInfo):void
            {
               _isUpdateSkill = true;
               ModuleManager.showModule(ClientConfig.getAppModule("SkillAwakePanel"),"正在加载技能唤醒仪....",param1);
            });
         }
      }
      
      public static function onCloseSkillReplace() : void
      {
         if(_isUpdateSkill)
         {
            _isUpdateSkill = false;
            execute();
         }
      }
   }
}
