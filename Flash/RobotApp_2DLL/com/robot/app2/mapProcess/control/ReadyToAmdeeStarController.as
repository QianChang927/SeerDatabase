package com.robot.app2.mapProcess.control
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.panel.MapNamePanel;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.manage.TaskDiaLogManager;
   import com.robot.app.task.taskUtils.taskDialog.TaskMod;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.fightInfo.attack.FightOverInfo;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.Alarm2;
   import com.robot.core.ui.alert.Alert;
   import com.robot.core.utils.BitUtils;
   import com.robot.core.utils.CommonUI;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class ReadyToAmdeeStarController
   {
      
      public static var curStep:uint;
      
      private static var _taskMc:MovieClip;
      
      private static var fruitNum:uint;
      
      private static var leftCount:uint;
      
      private static var _curIndex:uint;
      
      private static var isFight:Boolean;
      
      private static var bossStatus:uint;
      
      private static const CMDID:uint = 45656;
      
      private static const mapID:uint = 77;
      
      private static const _mapAnimate:String = "ReadyToAmdeeStar_Animate";
      
      private static const npcArr:Array = [NPC.ZOG,NPC.ALLISON];
       
      
      public function ReadyToAmdeeStarController()
      {
         super();
      }
      
      private static function loadTaskMc(param1:Function, param2:uint = 1) : void
      {
         var fun:Function = param1;
         var frame:uint = param2;
         if(_taskMc == null)
         {
            ResourceManager.getResource(ClientConfig.getMapAnimate(_mapAnimate),function(param1:MovieClip):void
            {
               _taskMc = param1;
               _taskMc.gotoAndStop(frame);
               MapManager.currentMap.topLevel.addChild(_taskMc);
               _taskMc.addEventListener(MouseEvent.CLICK,onClick);
               if(fun != null)
               {
                  fun();
               }
            });
         }
         else
         {
            if(_taskMc.parent == null)
            {
               MapManager.currentMap.topLevel.addChild(_taskMc);
            }
            if(fun != null)
            {
               fun();
            }
         }
      }
      
      private static function onClick(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         switch(e.target.name)
         {
            case "btn_0":
            case "btn_1":
            case "btn_2":
            case "btn_3":
            case "btn_4":
               _curIndex = uint(e.target.name.split("_")[1]);
               if(Math.random() > 0.5)
               {
                  Alarm2.show("这个果实似乎已经被别的精灵盯上了，先驱赶它们吧！",function():void
                  {
                     isFight = true;
                     FightManager.fightNoMapBoss("",7224);
                  });
               }
               else
               {
                  collectFruit();
               }
               break;
            case "bossBtn_0":
            case "bossBtn_1":
               _curIndex = uint(e.target.name.split("_")[1]);
               NpcDialog.show(npcArr[_curIndex],["你们赛尔号的人，就是喜欢捣乱！这次让你知道我的厉害！"],["怕你不成！（进入战斗）","先不跟你打！"],[function():void
               {
                  ToolBarController.panel.hide();
                  FightManager.fightNoMapBoss("",7225 + _curIndex);
               }]);
               break;
            case "bossBtn_2":
               Alert.show("你即将与整个神秘的黑影对战，确定吗？",function():void
               {
                  FightManager.fightNoMapBoss("",7227);
               });
         }
      }
      
      private static function collectFruit() : void
      {
         isFight = false;
         CommonUI.showProgressBar(MapManager.currentMap.topLevel,MainManager.actorModel.pos.x,MainManager.actorModel.pos.y - 70,function():void
         {
            SocketConnection.sendWithCallback(CMDID,function(param1:SocketEvent):void
            {
               var e:SocketEvent = param1;
               update(function():void
               {
                  if(fruitNum >= 31)
                  {
                     flishTask();
                  }
                  else
                  {
                     Alarm2.show("你已成功收集到1个幻光果实！还有" + leftCount + "个幻光果实！");
                  }
               });
            },13,_curIndex + 1);
         });
      }
      
      private static function flishTask() : void
      {
         SocketConnection.sendWithCallback(CMDID,function(param1:SocketEvent):void
         {
            var e:SocketEvent = param1;
            MapManager.changeMapWithCallback(mapID,function():void
            {
               ModuleManager.showAppModule("ReadyToAmdeeStarPanel");
            });
         },12,curStep + 1);
      }
      
      private static function playStory(param1:Array, param2:Function = null, param3:Boolean = true) : void
      {
         var storyArr:Array = param1;
         var fun:Function = param2;
         var showIcon:Boolean = param3;
         KTool.hideMapAllPlayerAndMonster();
         MapObjectControl.hideOrShowAllObjects(false);
         if(_taskMc.parent == null)
         {
            MapManager.currentMap.topLevel.addChild(_taskMc);
         }
         MapNamePanel.hide();
         ToolBarController.panel.hide();
         MapManager.currentMap.topLevel.mouseChildren = true;
         MapManager.currentMap.topLevel.mouseEnabled = true;
         LevelManager.iconLevel.visible = false;
         TaskDiaLogManager.single.playStory(storyArr,function():void
         {
            KTool.showMapAllPlayerAndMonster();
            MapObjectControl.hideOrShowAllObjects(true);
            if(showIcon)
            {
               LevelManager.iconLevel.visible = true;
               ToolBarController.panel.show();
               MapNamePanel.show();
            }
            if(fun != null)
            {
               fun();
            }
         });
      }
      
      public static function initForMap() : void
      {
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightOver);
         if(curStep == 1)
         {
            MapNamePanel.hide();
            ToolBarController.panel.hide();
            LevelManager.iconLevel.visible = false;
            loadTaskMc(function():void
            {
               update(function():void
               {
                  if(leftCount == 5 && !isFight)
                  {
                     Alarm2.show("幻光果实就在这个地方，你去收集5个吧！");
                  }
               });
            },6);
         }
         else
         {
            KTool.hideMapAllPlayerAndMonster();
            if(BitBuffSetClass.getState(23197 + curStep - 2) == 0)
            {
               loadTaskMc(function():void
               {
                  playStory(getStroy(curStep - 1),function():void
                  {
                     BitBuffSetClass.setState(23197 + curStep - 2,1);
                     _taskMc.gotoAndStop(2 * (curStep - 1));
                     _taskMc.mc.gotoAndStop(_taskMc.mc.totalFrames);
                     update();
                  },false);
               });
               return;
            }
            loadTaskMc(function():void
            {
               MapNamePanel.hide();
               ToolBarController.panel.hide();
               LevelManager.iconLevel.visible = false;
               _taskMc.gotoAndStop(2 * (curStep - 1));
               _taskMc.mc.gotoAndStop(_taskMc.mc.totalFrames);
               update();
            });
         }
      }
      
      public static function playFirstTaskMv() : void
      {
         loadTaskMc(function():void
         {
            playStory(getStroy(curStep),function():void
            {
               destroy();
               flishTask();
            });
         });
      }
      
      public static function update(param1:Function = null) : void
      {
         var fun:Function = param1;
         KTool.getMultiValue([3985,3986],function(param1:Array):void
         {
            var _loc2_:uint = 0;
            var _loc3_:int = 0;
            fruitNum = param1[0];
            bossStatus = param1[1];
            if(curStep == 1)
            {
               _loc3_ = 0;
               while(_loc3_ < 5)
               {
                  _taskMc["btn_" + _loc3_].visible = BitUtils.getBit(fruitNum,_loc3_) == 0;
                  _loc2_ += BitUtils.getBit(fruitNum,_loc3_);
                  _loc3_++;
               }
               leftCount = 5 - _loc2_;
            }
            else
            {
               _loc3_ = 0;
               while(_loc3_ < 3)
               {
                  if(_taskMc.mc["bossBtn_" + _loc3_])
                  {
                     _taskMc.mc["bossBtn_" + _loc3_].visible = BitUtils.getBit(bossStatus,_loc3_) == 0;
                     _taskMc.mc["flag_" + _loc3_].visible = BitUtils.getBit(bossStatus,_loc3_) == 0;
                  }
                  _loc3_++;
               }
            }
            if(fun != null)
            {
               fun();
            }
         });
      }
      
      public static function destroy() : void
      {
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightOver);
         if(_taskMc != null)
         {
            _taskMc.removeEventListener(MouseEvent.CLICK,onClick);
            DisplayUtil.removeForParent(_taskMc);
            _taskMc = null;
         }
         KTool.showMapAllPlayerAndMonster();
         LevelManager.iconLevel.visible = true;
         ToolBarController.panel.show();
         MapNamePanel.show();
      }
      
      private static function onFightOver(param1:PetFightEvent) : void
      {
         var e:PetFightEvent = param1;
         var fightOver:FightOverInfo = e.dataObj as FightOverInfo;
         if(fightOver.winnerID == MainManager.actorID)
         {
            if(curStep == 1)
            {
               collectFruit();
            }
            else if(curStep == 2)
            {
               if(bossStatus >= 3)
               {
                  playStory(getStroy(3),function():void
                  {
                     flishTask();
                  });
               }
            }
            else if(bossStatus >= 7)
            {
               playStory(getStroy(4),function():void
               {
                  flishTask();
               });
            }
         }
         else if(curStep == 2)
         {
            NpcDialog.show(npcArr[_curIndex],["辣鸡！别挡路！"],["......"],null);
         }
         else if(curStep == 3)
         {
            Alarm2.show("你失败了！再来一次吧！");
         }
      }
      
      private static function getStroy(param1:uint) : Array
      {
         var _loc2_:Array = [];
         switch(param1)
         {
            case 0:
               _loc2_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[_taskMc,1,"mc"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.DOCTOR,["这些文字，你从哪里弄到的？"],["一个朋友给我的。"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["博士，这些文字到底是什么意思啊？"],["嗯......嗯.....你一定要知道吗？"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.DOCTOR,["我发现了一些奇怪的事情，邪恶的力量正在腐蚀着光明，阿玛迪斯星的上空阴云密布......这是阿玛迪斯星的文字，那里被誉为光之国。"],["那里遇到了危险？"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.DOCTOR,["我不知道，但是据说，阿玛迪斯星的文字背后，都是一种神奇的咒术。你是打算去那里吗？"],["是的！我开展冒险之旅！"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.DOCTOR,["好吧，但是你最好小心一点，不过你可以去找找米咔，那里是他的故乡哦！"],["好的博士！"]));
               break;
            case 1:
               _loc2_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[_taskMc,2,"mc"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.ALLISON,["我劝你识相点，早点离开！这次我们海盗派出超强的将领！准备占领阿玛迪斯星！"],["哼！就凭你们！手下败将！"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["我现在就要你们好看！"],["好，那我们就先给你点颜色看看！再去抓那个小光虫！"]));
               break;
            case 2:
               _loc2_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[_taskMc,4,"mc"]));
               break;
            case 3:
               _loc2_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[_taskMc,3,"mc"]));
               break;
            case 4:
               _loc2_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[_taskMc,5,"mc"]));
         }
         return _loc2_;
      }
   }
}
