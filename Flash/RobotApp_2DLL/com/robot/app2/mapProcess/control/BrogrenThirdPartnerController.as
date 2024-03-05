package com.robot.app2.mapProcess.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.manage.TaskDiaLogManager;
   import com.robot.app.task.taskUtils.taskDialog.TaskMod;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.CommandID;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.MapEvent;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.utils.CommonUI;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.ui.Mouse;
   import flash.utils.clearInterval;
   import flash.utils.setInterval;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class BrogrenThirdPartnerController
   {
      
      private static var _map:BaseMapProcess;
      
      private static var _caveMc:MovieClip;
      
      private static var _intervalID:uint;
      
      private static var _monsterMc:MovieClip;
      
      private static var _canHit:Boolean;
      
      private static var _itemMc:MovieClip;
      
      private static var _collctCount:int;
      
      private static var _moduleName:String = "";
       
      
      public function BrogrenThirdPartnerController()
      {
         super();
      }
      
      public static function initForMap(param1:BaseMapProcess) : void
      {
         _map = param1;
      }
      
      public static function playAnimate1() : void
      {
         ResourceManager.getResource(ClientConfig.getMapAnimate("map_10659_brogren"),function(param1:MovieClip):void
         {
            var mod1:TaskMod;
            var mod2:TaskMod;
            var mod3:TaskMod;
            var mod4:TaskMod;
            var mod5:TaskMod;
            var taskMc:MovieClip = param1;
            KTool.showMapAllPlayerAndMonster(false);
            MapObjectControl.addIgnore("brogrenDevice1",true);
            MapObjectControl.addIgnore("brogrenDevice2",true);
            MapObjectControl.addIgnore("brogrenDevice3",true);
            MapManager.currentMap.topLevel.addChild(taskMc);
            mod1 = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,1,"mc1"]);
            mod2 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.BULU,["终于到了这个传说中梦幻一般的岛屿了！"]);
            mod3 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.GELIN,["是呀！花了三天三夜总算到了。"]);
            mod4 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.BEIDI,["好累……"]);
            mod5 = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,2,"mc2"]);
            TaskDiaLogManager.single.playStory([mod1,mod2,mod3,mod4,mod5],function():void
            {
               _caveMc = taskMc;
               CommonUI.addYellowExcal(_caveMc["mc2"],364,145);
               (_caveMc["mc2"]["caveMc"] as MovieClip).buttonMode = true;
               _caveMc["mc2"]["caveMc"].addEventListener(MouseEvent.CLICK,onClickCave);
            });
         });
      }
      
      private static function onClickCave(param1:MouseEvent) : void
      {
         var mod1:TaskMod;
         var mod2:TaskMod;
         var mod3:TaskMod;
         var mod4:TaskMod;
         var e:MouseEvent = param1;
         KTool.showMapAllPlayerAndMonster(false);
         CommonUI.removeYellowExcal(_caveMc["mc2"]);
         _caveMc["mc2"]["caveMc"].removeEventListener(MouseEvent.CLICK,onClickCave);
         mod1 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.GELIN,["这个低地有蹊跷！"]);
         mod2 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.BULU,["是的，低地有一股邪恶的味道。"]);
         mod3 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.GELIN,["看来贝迪的失踪和低地很有关系了。我们必须去救他！"]);
         mod4 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.BULU,["好的！出发！"]);
         TaskDiaLogManager.single.playStory([mod1,mod2,mod3,mod4],function():void
         {
            MapObjectControl.removeIgnore("brogrenDevice1",true);
            MapObjectControl.removeIgnore("brogrenDevice2",true);
            MapObjectControl.removeIgnore("brogrenDevice3",true);
            MapManager.currentMap.topLevel.removeChild(_caveMc);
            showComplete(1);
         });
      }
      
      public static function playAnimate2() : void
      {
         ResourceManager.getResource(ClientConfig.getMapAnimate("map_10659_brogren"),function(param1:MovieClip):void
         {
            var mod:TaskMod;
            var taskMc:MovieClip = param1;
            KTool.showMapAllPlayerAndMonster(false);
            MapManager.currentMap.topLevel.addChild(taskMc);
            mod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,3,"mc3"]);
            TaskDiaLogManager.single.playStory([mod],function():void
            {
               _monsterMc = taskMc as MovieClip;
               _monsterMc["mc3"]["monster"].addEventListener(MouseEvent.CLICK,onClickMonster);
               _monsterMc.addEventListener(Event.ENTER_FRAME,onMouseFollow);
               Mouse.hide();
               _monsterMc["mc3"]["hammer"].visible = true;
               _intervalID = setInterval(onPlayMonsterAnamite,3000);
               onPlayMonsterAnamite();
            });
         });
      }
      
      private static function onPlayMonsterAnamite() : void
      {
         _monsterMc["mc3"]["monster"].scaleX *= -1;
         if(_monsterMc["mc3"]["monster"].scaleX > 0)
         {
            _canHit = true;
         }
         else
         {
            _canHit = false;
         }
      }
      
      private static function onClickMonster(param1:MouseEvent) : void
      {
         var mod:TaskMod = null;
         var e:MouseEvent = param1;
         if(_canHit)
         {
            _monsterMc["mc3"]["monster"].removeEventListener(MouseEvent.CLICK,onClickMonster);
            _monsterMc.removeEventListener(Event.ENTER_FRAME,onMouseFollow);
            clearInterval(_intervalID);
            mod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[_monsterMc,4,"mc4"]);
            TaskDiaLogManager.single.playStory([mod],function():void
            {
               MapManager.currentMap.topLevel.removeChild(_monsterMc);
               Mouse.show();
               showComplete(2);
            });
         }
         else
         {
            Alarm.show("怪物正看着你，偷袭得从背后入手哦！");
         }
      }
      
      private static function onMouseFollow(param1:Event) : void
      {
         _monsterMc["mc3"]["hammer"].x = _map.topLevel.mouseX;
         _monsterMc["mc3"]["hammer"].y = _map.topLevel.mouseY;
      }
      
      public static function playAnimate3() : void
      {
         ResourceManager.getResource(ClientConfig.getMapAnimate("map_10659_brogren"),function(param1:MovieClip):void
         {
            var mod1:TaskMod;
            var mod2:TaskMod;
            var taskMc:MovieClip = param1;
            KTool.showMapAllPlayerAndMonster(false);
            MapManager.currentMap.topLevel.addChild(taskMc);
            mod1 = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,5,"mc5"]);
            mod2 = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,6,"mc6"]);
            TaskDiaLogManager.single.playStory([mod1,mod2],function():void
            {
               _itemMc = taskMc;
               _collctCount = 0;
               var _loc1_:int = 0;
               while(_loc1_ < 5)
               {
                  _itemMc["mc6"]["item_" + _loc1_].addEventListener(MouseEvent.CLICK,onCollct);
                  (_itemMc["mc6"]["item_" + _loc1_] as MovieClip).buttonMode = true;
                  _loc1_++;
               }
            });
         });
      }
      
      private static function getIndex(param1:Object) : int
      {
         var _loc2_:String = String(param1.name);
         var _loc3_:Array = _loc2_.split("_");
         return _loc3_[1] == null ? -1 : int(_loc3_[1]);
      }
      
      private static function onCollct(param1:MouseEvent) : void
      {
         var _loc2_:int = 0;
         ++_collctCount;
         _itemMc["mc6"]["item_" + getIndex(param1.currentTarget)].visible = false;
         if(_collctCount == 5)
         {
            _loc2_ = 0;
            while(_loc2_ < 5)
            {
               _itemMc["mc6"]["item_" + _loc2_].removeEventListener(MouseEvent.CLICK,onCollct);
               _loc2_++;
            }
            Alarm.show("全部收集完毕！",onPlayCollctAnamite);
         }
         else
         {
            Alarm.show("收集到" + _collctCount + "/5个草药，加油！");
         }
      }
      
      private static function onPlayCollctAnamite() : void
      {
         var mod:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[_itemMc,7,"mc7"]);
         TaskDiaLogManager.single.playStory([mod],function():void
         {
            MapManager.currentMap.topLevel.removeChild(_itemMc);
            showComplete(3);
         });
      }
      
      private static function showComplete(param1:int) : void
      {
         var index:int = param1;
         KTool.showMapAllPlayerAndMonster(true);
         SocketConnection.sendWithCallback(CommandID.BROGREN_SAVE_AND_GET,function(param1:SocketEvent):void
         {
            var e:SocketEvent = param1;
            ResourceManager.getResource(ClientConfig.getMapAnimate("roadToGrowthTaskComplete"),function(param1:MovieClip):void
            {
               var mc:MovieClip = param1;
               LevelManager.topLevel.addChild(mc);
               mc.x = 300;
               mc.y = 190;
               ModuleManager.showModule(ClientConfig.getAppModule("BrogrenThirdPartnerSavePanel"));
               AnimateManager.playMcAnimate(mc,0,"",function():void
               {
                  DisplayUtil.removeForParent(mc);
               });
            });
         },1,index);
      }
      
      public static function click1() : void
      {
         if(MapManager.currentMap.id == 10659)
         {
            ModuleManager.showModule(ClientConfig.getAppModule("BrogrenThirdPartnerMainPanel"));
         }
         else
         {
            _moduleName = "BrogrenThirdPartnerMainPanel";
            MapManager.changeMap(10659);
            MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,onChangeMap);
         }
      }
      
      public static function click2() : void
      {
         if(MapManager.currentMap.id == 10659)
         {
            ModuleManager.showModule(ClientConfig.getAppModule("BrogrenThirdPartnerSuperEvoPanel"));
         }
         else
         {
            _moduleName = "BrogrenThirdPartnerSuperEvoPanel";
            MapManager.changeMap(10659);
            MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,onChangeMap);
         }
      }
      
      public static function click3() : void
      {
         if(MapManager.currentMap.id == 10659)
         {
            ModuleManager.showModule(ClientConfig.getAppModule("BrogrenThirdPartnerDevelopPanel"));
         }
         else
         {
            _moduleName = "BrogrenThirdPartnerDevelopPanel";
            MapManager.changeMap(10659);
            MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,onChangeMap);
         }
      }
      
      private static function onChangeMap(param1:Event) : void
      {
         MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,onChangeMap);
         ModuleManager.showModule(ClientConfig.getAppModule(_moduleName));
      }
      
      public static function destroy() : void
      {
         if(_map)
         {
            _map = null;
         }
      }
   }
}
