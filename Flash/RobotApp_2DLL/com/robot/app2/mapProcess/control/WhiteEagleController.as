package com.robot.app2.mapProcess.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.manager.ResourceManager;
   
   public class WhiteEagleController
   {
      
      private static var _map:BaseMapProcess;
      
      private static var taskMC:MovieClip;
       
      
      public function WhiteEagleController()
      {
         super();
      }
      
      public static function initMap31(param1:BaseMapProcess) : void
      {
         _map = param1;
         playStory();
      }
      
      private static function playStory() : void
      {
         ResourceManager.getResource(ClientConfig.getMapAnimate("map_31_10"),function(param1:MovieClip):void
         {
            taskMC = param1;
            _map.btnLevel.addChild(taskMC);
            taskMC.addEventListener(MouseEvent.CLICK,onClickHandler);
            taskMC.buttonMode = true;
            if(!BitBuffSetClass.getState(22670))
            {
               taskMC.gotoAndStop(1);
            }
            else
            {
               taskMC.gotoAndStop(4);
            }
         });
      }
      
      protected static function onClickHandler(param1:MouseEvent) : void
      {
         var event:MouseEvent = param1;
         if(taskMC.currentFrame == 1)
         {
            KTool.hideMapAllPlayerAndMonster();
            AnimateManager.playMcAnimate(taskMC,2,"mc",function():void
            {
               AnimateManager.playMcAnimate(taskMC,3,"mc",function():void
               {
                  BitBuffSetClass.setState(22670,1,function():void
                  {
                     KTool.showMapAllPlayerAndMonster();
                     taskMC.gotoAndStop(4);
                  });
               });
            });
         }
         else if(taskMC.currentFrame == 4)
         {
            NpcDialog.show(NPC.ATIEDA,["好厉害的家伙！请帮我击败他！"],["好的！我这就去打飞他们！"],[function():void
            {
               ModuleManager.showModule(ClientConfig.getAppModule("GodOfWhiteEaglePanel"),"正在努力打开面板...");
            }]);
         }
      }
      
      public static function destroy() : void
      {
         taskMC.removeEventListener(MouseEvent.CLICK,onClickHandler);
         _map = null;
         taskMC = null;
      }
   }
}
