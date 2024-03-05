package com.robot.app.task.taskscollection
{
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.events.Event;
   import flash.events.MouseEvent;
   
   public class Task88
   {
      
      private static var _map:BaseMapProcess;
      
      private static const ID:uint = 88;
       
      
      public function Task88()
      {
         super();
      }
      
      public static function init(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         if(TasksManager.getTaskStatus(ID) != TasksManager.COMPLETE)
         {
            TasksManager.accept(ID);
            MainManager.selfVisible = false;
            _map.btnLevel["doctorBtn"].visible = false;
            _map.btnLevel["doctorBtn"].addEventListener(MouseEvent.CLICK,onClickDoctor);
            AnimateManager.playMcAnimate(_map.conLevel["act1"],2,"mc2",function():void
            {
               AnimateManager.playMcAnimate(_map.conLevel["act1"],3,"mc3",function():void
               {
                  LevelManager.mapLevel.addEventListener(MouseEvent.CLICK,onClickMap1);
                  LevelManager.mapLevel.buttonMode = true;
               });
            });
         }
      }
      
      private static function onClickDoctor(param1:Event) : void
      {
         var e:Event = param1;
         _map.btnLevel["doctorBtn"].visible = false;
         NpcDialog.show(NPC.DOCTOR,["我是精灵研究专家派特博士。哈哈，如果我没猜错，你是我们的新船员吧。"],["博士，你好。我叫" + MainManager.actorInfo.nick + "。"],[function():void
         {
            NpcDialog.show(NPC.DOCTOR,[MainManager.actorInfo.formatNick + "？真是个好名字。哈哈，欢迎欢迎。每个新船员，都能在我这里领取第一只精灵哦。"],["真的吗？太好了！"],[function():void
            {
               AnimateManager.playMcAnimate(_map.conLevel["act1"],5,"mc5",function():void
               {
                  LevelManager.mapLevel.addEventListener(MouseEvent.CLICK,onClickMap2);
                  LevelManager.mapLevel.buttonMode = true;
               });
            }]);
         }]);
      }
      
      private static function onClickMap2(param1:Event) : void
      {
         LevelManager.mapLevel.removeEventListener(MouseEvent.CLICK,onClickMap2);
         LevelManager.mapLevel.buttonMode = false;
         _map.conLevel["act1"].gotoAndStop(1);
         ModuleManager.showModule(ClientConfig.getAppModule("MainPetChoose"));
      }
      
      public static function choosePet(param1:uint) : void
      {
         var index:uint = param1;
         AnimateManager.playMcAnimate(_map.conLevel["act1"],index + 5,"mc" + (index + 5),function():void
         {
            TasksManager.complete(ID,0,function(param1:Boolean):void
            {
               var b:Boolean = param1;
               if(!b)
               {
                  return;
               }
               AnimateManager.playMcAnimate(_map.conLevel["act1"],9,"mc9",function():void
               {
                  LevelManager.mapLevel.addEventListener(MouseEvent.CLICK,onClickMap3);
                  LevelManager.mapLevel.buttonMode = true;
               });
            },false,index);
         });
      }
      
      private static function onClickMap1(param1:Event) : void
      {
         var e:Event = param1;
         LevelManager.mapLevel.removeEventListener(MouseEvent.CLICK,onClickMap1);
         LevelManager.mapLevel.buttonMode = false;
         AnimateManager.playMcAnimate(_map.conLevel["act1"],4,"mc4",function():void
         {
            _map.btnLevel["doctorBtn"].visible = true;
         });
      }
      
      private static function onClickMap3(param1:Event) : void
      {
         var e:Event = param1;
         LevelManager.mapLevel.removeEventListener(MouseEvent.CLICK,onClickMap3);
         LevelManager.mapLevel.buttonMode = false;
         AnimateManager.playMcAnimate(_map.conLevel["act1"],10,"mc10",function():void
         {
            LevelManager.mapLevel.addEventListener(MouseEvent.CLICK,onClickMap4);
            LevelManager.mapLevel.buttonMode = true;
         });
      }
      
      private static function onClickMap4(param1:Event) : void
      {
         var e:Event = param1;
         LevelManager.mapLevel.removeEventListener(MouseEvent.CLICK,onClickMap4);
         LevelManager.mapLevel.buttonMode = false;
         AnimateManager.playMcAnimate(_map.conLevel["act1"],11,"mc11",function():void
         {
            LevelManager.mapLevel.addEventListener(MouseEvent.CLICK,onClickMap5);
            LevelManager.mapLevel.buttonMode = true;
         });
      }
      
      private static function onClickMap5(param1:Event) : void
      {
         LevelManager.mapLevel.removeEventListener(MouseEvent.CLICK,onClickMap5);
         LevelManager.mapLevel.buttonMode = false;
      }
      
      public static function destroy() : void
      {
         LevelManager.mapLevel.removeEventListener(MouseEvent.CLICK,onClickMap1);
         LevelManager.mapLevel.removeEventListener(MouseEvent.CLICK,onClickMap2);
         if(Boolean(_map) && Boolean(_map.btnLevel["doctorBtn"]))
         {
            _map.btnLevel["doctorBtn"].removeEventListener(MouseEvent.CLICK,onClickDoctor);
         }
         _map = null;
      }
   }
}
