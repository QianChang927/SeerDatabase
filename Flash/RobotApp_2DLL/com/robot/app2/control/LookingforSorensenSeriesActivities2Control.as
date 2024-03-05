package com.robot.app2.control
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.taskDialog.TaskStoryPlayer;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.mode.MapModel;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.Alarm2;
   import com.robot.core.utils.BitUtils;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class LookingforSorensenSeriesActivities2Control
   {
      
      private static var _map:MapModel;
      
      private static var _taskMc:MovieClip;
      
      private static const BUFFERID1:uint = 1345;
      
      private static const BUFFERID2:uint = 1346;
      
      private static var _itemNum:int;
      
      private static var _compeleteNum:int;
       
      
      public function LookingforSorensenSeriesActivities2Control()
      {
         super();
      }
      
      public static function initToMap() : void
      {
         if(MapManager.currentMap.id != 11393)
         {
            MapManager.changeMapWithCallback(11393,function():void
            {
               initView();
            });
         }
         else
         {
            initView();
         }
      }
      
      public static function destroy() : void
      {
         DisplayUtil.removeForParent(taskMc);
      }
      
      private static function initView() : void
      {
         DisplayUtil.removeForParent(taskMc);
         ResourceManager.getResource(ClientConfig.getMapAnimate("map_lookingforSorensenSeriesActivities2"),function(param1:MovieClip):void
         {
            taskMc = param1;
            _map = MapManager.currentMap;
            _map.controlLevel.addChild(taskMc);
            update();
         });
      }
      
      private static function onMcClick(param1:MouseEvent) : void
      {
         _map.btnLevel["mc"].visible = false;
         var _loc2_:int = int(param1.target.name.split("_")[1]);
         switch(_compeleteNum)
         {
            case 0:
               if(!BufferRecordManager.getMyState(BUFFERID1))
               {
                  onEqClick1();
               }
               else
               {
                  onEqClick12();
               }
               break;
            case 1:
               if(!BufferRecordManager.getMyState(BUFFERID2))
               {
                  onEqClick2();
               }
               else
               {
                  _map.btnLevel["mc"].visible = true;
                  onEqClick21(_loc2_);
               }
               break;
            case 2:
               taskMc.visible = true;
               onEqClick3();
         }
      }
      
      private static function update() : void
      {
         KTool.getMultiValue([4493],function(param1:Array):void
         {
            var va:Array = param1;
            _compeleteNum = va[0];
            _map.btnLevel["mc"].gotoAndStop(_compeleteNum + 1);
            if(_map.btnLevel["mc"].btn != null)
            {
               _map.btnLevel["mc"].btn.addEventListener(MouseEvent.CLICK,onMcClick);
            }
            KTool.hideMapAllPlayerAndMonster();
            _map.btnLevel["mc"].visible = true;
            switch(_compeleteNum)
            {
               case 0:
                  if(BufferRecordManager.getMyState(BUFFERID1))
                  {
                     taskMc.gotoAndStop(1);
                     taskMc.mc1.gotoAndStop(398);
                     _map.btnLevel["mc"].gotoAndStop(4);
                     _map.btnLevel["mc"].btn.addEventListener(MouseEvent.CLICK,onMcClick);
                     KTool.showMapAllPlayerAndMonster();
                  }
                  else
                  {
                     taskMc.gotoAndStop(1);
                     taskMc.mc1.gotoAndStop(1);
                  }
                  break;
               case 1:
                  if(BufferRecordManager.getMyState(BUFFERID2))
                  {
                     taskMc.gotoAndStop(2);
                     taskMc.mc2.gotoAndStop(645);
                     _map.btnLevel["mc"].gotoAndStop(5);
                     _map.btnLevel["mc"].addEventListener(MouseEvent.CLICK,onMcClick);
                     KTool.showMapAllPlayerAndMonster();
                     KTool.getMultiValue([4494],function(param1:Array):void
                     {
                        var _loc2_:int = 0;
                        while(_loc2_ < 2)
                        {
                           _map.btnLevel["mc"]["mc_" + _loc2_].visible = !BitUtils.getBit(param1[0],4 + _loc2_);
                           _map.btnLevel["mc"]["btn_" + _loc2_].visible = !BitUtils.getBit(param1[0],4 + _loc2_);
                           _loc2_++;
                        }
                        if(BitUtils.getBit(param1[0],4) > 0 && BitUtils.getBit(param1[0],5) > 0)
                        {
                           playMc(3);
                        }
                     });
                  }
                  else
                  {
                     taskMc.gotoAndStop(2);
                     taskMc.mc2.gotoAndStop(1);
                  }
                  break;
               case 2:
                  taskMc.visible = false;
            }
         });
         ItemManager.updateItems([1711289],function():void
         {
            var _loc1_:Array = new Array();
            _loc1_[0] = ItemManager.getNumByID(1711289);
            _itemNum = _loc1_[0];
         });
      }
      
      private static function playMc(param1:int) : void
      {
         var index:int = param1;
         DisplayUtil.removeForParent(taskMc);
         ResourceManager.getResource(ClientConfig.getMapAnimate("map_lookingforSorensenSeriesActivities2"),function(param1:MovieClip):void
         {
            taskMc = param1;
            _map.controlLevel.addChild(taskMc);
            startPreTask(index);
         });
      }
      
      private static function startPreTask(param1:int) : void
      {
         var story:Array;
         var storyPlayer:TaskStoryPlayer = null;
         var index:int = param1;
         LevelManager.iconLevel.visible = false;
         ToolBarController.panel.visible = false;
         MapObjectControl.hideOrShowAllObjects(false);
         _map.btnLevel["mc"].visible = false;
         story = [[TaskStoryPlayer.MAP_MOVIE,[taskMc,index,"mc" + index]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            MapObjectControl.hideOrShowAllObjects(true);
            LevelManager.iconLevel.visible = true;
            ToolBarController.panel.visible = true;
            if(index == 1)
            {
               onDialog1();
            }
            else if(index == 2)
            {
               _map.btnLevel["mc"].visible = true;
               BufferRecordManager.setMyState(BUFFERID2,true,function():void
               {
                  update();
               });
            }
            else if(index == 3)
            {
               SocketConnection.addCmdListener(46273,function(param1:SocketEvent):void
               {
                  var e:SocketEvent = param1;
                  SocketConnection.removeCmdListener(46273,arguments.callee);
                  MapManager.changeMapWithCallback(1,function():void
                  {
                     ModuleManager.showModule(ClientConfig.getAppModule("LookingforSorensenSeriesActivities2MainPanel"),"正在打开....");
                     Alarm2.show("恭喜你！完成第二关卡！请前往第三关卡吧！");
                  });
               });
               SocketConnection.send(46273,1,2);
            }
            else if(index == 4)
            {
               SocketConnection.addCmdListener(46273,function(param1:SocketEvent):void
               {
                  var e:SocketEvent = param1;
                  SocketConnection.removeCmdListener(46273,arguments.callee);
                  MapManager.changeMapWithCallback(1,function():void
                  {
                     ModuleManager.showModule(ClientConfig.getAppModule("LookingforSorensenSeriesActivities2MainPanel"),"正在打开....");
                     Alarm2.show("恭喜你！完成第三关卡！现在可以打开《魔域风尘录》了！");
                  });
               });
               SocketConnection.send(46273,1,3);
            }
         };
         storyPlayer.start();
      }
      
      private static function onEqClick1() : void
      {
         NpcDialog.show(NPC.SAIXIAOXI,["我猜的一点都没有错！果然下一站就是天马祭坛！"],["那个是不是毁灭之神？"],[function():void
         {
            NpcDialog.show(NPC.SAIXIAOXI,["你居然知道他……看来还是做了很多功课嘛……"],["嘿嘿……那个，我们就在这里躲着吗？"],[function():void
            {
               NpcDialog.show(NPC.SEER,["看他的样子，好像他要实施什么计划。"],["嗯？"],[function():void
               {
                  NpcDialog.show(NPC.SAIXIAOXI,["怎么看也看不出，这个家伙有什么计划，他好像一直在那里冥思什么。"],["你真的没有感觉什么异样？"],[function():void
                  {
                     NpcDialog.show(NPC.SAIXIAOXI,["真的没有……就是好困啊……可能太累了。"],["我也好困。"],[function():void
                     {
                        playMc(1);
                     }]);
                  }]);
               }]);
            }]);
         }]);
      }
      
      private static function onDialog1() : void
      {
         NpcDialog.show(NPC.SAIXIAOXI,["这次是……真的完了。"],["赛小息，你胆子真是越来越大了！"],[function():void
         {
            NpcDialog.show(NPC.MODIXISI,["是赛尔号也打算介入这个事件吗？说！否则我今天就拆了你们的铁皮！"],["额……我们只是路过……路过而已。"],[function():void
            {
               NpcDialog.show(NPC.SAIXIAOXI,["我们路过这里，太困了，就睡着了……谁知道你们到底要做什么。"],["哦？太困了？"],[function():void
               {
                  NpcDialog.show(NPC.MODIXISI,["也对，我在吸收这里的能量，确实你们会渐渐的失去意识。睡着也是正常的。"],["哦，好，那你继续吸收。我们睡醒了，现在要离开这里了。"],[function():void
                  {
                     NpcDialog.show(NPC.SAIXIAOXI,["对了哈，代我向索伦森问好啊，话说他现在是不是已经醒啦？"],["咳咳……你以为你在跟谁说话吗？"],[function():void
                     {
                        BufferRecordManager.setMyState(BUFFERID1,true,function():void
                        {
                           onEqClick12();
                        });
                     }]);
                  }]);
               }]);
            }]);
         }]);
      }
      
      private static function onEqClick12() : void
      {
         NpcDialog.show(NPC.MODIXISI,["你以为我不知道你们在干什么吗？你们大难不死逃离了魔域，居然还有胆子来这里！"],["看来，只能一搏了！（进入战斗）","我打算向恶势力低头。"],[function():void
         {
            FightManager.tryFight(480,[0,0,0,0],function():void
            {
               if(FightManager.isWin)
               {
                  SocketConnection.addCmdListener(46273,function(param1:SocketEvent):void
                  {
                     var e:SocketEvent = param1;
                     SocketConnection.removeCmdListener(46273,arguments.callee);
                     MapManager.changeMapWithCallback(1,function():void
                     {
                        ModuleManager.showModule(ClientConfig.getAppModule("LookingforSorensenSeriesActivities2MainPanel"),"正在打开....");
                        Alarm2.show("恭喜你完成第一关卡！请前往第二关吧！");
                     });
                  });
                  SocketConnection.send(46273,1,1);
               }
               else
               {
                  update();
                  onEqClick12();
               }
            });
         },function():void
         {
            update();
         }]);
      }
      
      private static function onDialog12() : void
      {
         NpcDialog.show(NPC.MODIXISI,["哼，你们是阻止不了我们的计划！"],["不好！"],[function():void
         {
            SocketConnection.addCmdListener(46273,function(param1:SocketEvent):void
            {
               var e:SocketEvent = param1;
               SocketConnection.removeCmdListener(46273,arguments.callee);
               MapManager.changeMapWithCallback(1,function():void
               {
                  ModuleManager.showModule(ClientConfig.getAppModule("LookingforSorensenSeriesActivities2MainPanel"),"正在打开....");
                  Alarm2.show("恭喜你完成第一关卡！请前往第二关吧！");
               });
            });
            SocketConnection.send(46273,1,1);
         },function():void
         {
         }]);
      }
      
      private static function onEqClick2() : void
      {
         NpcDialog.show(NPC.SAIXIAOXI,["我们必须阻止他，再次吸收这里的能量！"],["好！"],[function():void
         {
            NpcDialog.show(NPC.MODIXISI,["阻止我？天大的笑话！哈哈哈哈！我要看看你们究竟有什么本事！"],["来吧！"],[function():void
            {
               playMc(2);
            }]);
         }]);
      }
      
      private static function onEqClick21(param1:int) : void
      {
         var index:int = param1;
         NpcDialog.show(NPC.SAIXIAOXI,["莫迪西斯在那里释放了黑色的魔灵！速度消灭！"],["是！（进入战斗）！","稍等一下！"],[function():void
         {
            var arr:* = ["格尔顿 ","哈丘斯"];
            FightManager.fightNoMapBoss(arr[index],8264 + index,false,true,function():void
            {
            });
         }]);
      }
      
      private static function onEqClick3() : void
      {
         NpcDialog.show(NPC.MODIXISI,["你们的努力在我看来，就是天大的笑话。"],["你……！我们明明中断了你的魔法。"],[function():void
         {
            NpcDialog.show(NPC.SAIXIAOXI,["你的阴谋不会得逞！"],["哈哈哈哈！"],[function():void
            {
               playMc(4);
            }]);
         }]);
      }
      
      private static function set taskMc(param1:MovieClip) : void
      {
         _taskMc = param1;
      }
      
      private static function get taskMc() : MovieClip
      {
         return _taskMc;
      }
   }
}
