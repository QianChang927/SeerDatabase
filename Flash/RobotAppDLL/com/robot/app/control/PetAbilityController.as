package com.robot.app.control
{
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.ItemXMLInfo;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.ui.alert.ItemInBagAlert;
   import com.robot.core.utils.TextFormatUtil;
   
   public class PetAbilityController
   {
       
      
      public function PetAbilityController()
      {
         super();
      }
      
      public static function show() : void
      {
         if(TasksManager.getTaskStatus(1150) == TasksManager.COMPLETE)
         {
            ModuleManager.showModule(ClientConfig.getAppModule("ToAbilityPetPanel"),"正在加载精灵变异仓....");
         }
         else if(TasksManager.getTaskStatus(1150) == TasksManager.ALR_ACCEPT)
         {
            TasksManager.complete(1150,0,function(param1:Boolean):void
            {
               if(param1)
               {
                  ModuleManager.showModule(ClientConfig.getAppModule("ToAbilityPetPanel"),"正在加载精灵变异仓....");
               }
            });
         }
         else
         {
            AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("petAbilityIntro"),function():void
            {
               TasksManager.accept(1150,function(param1:Boolean):void
               {
                  var bb:Boolean = param1;
                  if(bb)
                  {
                     TasksManager.complete(1150,0,function(param1:Boolean):void
                     {
                        var bbb:Boolean = param1;
                        if(bbb)
                        {
                           ItemInBagAlert.show(300253,"恭喜你获得了一枚" + TextFormatUtil.getRedTxt(ItemXMLInfo.getName(300253)) + "，赶紧去晶核培育仓进行培育吧！",function():void
                           {
                              ModuleManager.showModule(ClientConfig.getAppModule("ToAbilityPetPanel"),"正在加载精灵变异仓....");
                           });
                        }
                     });
                  }
               });
            });
         }
      }
   }
}
