package com.robot.app2.control
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.utilClass.ActivityXMLInfo;
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.fightInfo.PetFightModel;
   import com.robot.core.info.fightInfo.attack.FightOverInfo;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.mode.MapModel;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.ui.alert.Alert;
   import com.robot.core.utils.CommonUI;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.manager.ResourceManager;
   
   public class TheGrinchofTheWailingWallController
   {
      
      public static const BUFFER_ID:Array = [23130,23131,23132,23133,23129];
      
      public static const MAP_ID_ARR:Array = [11187,11179,11178,11177];
      
      public static const BOSS_ID_ARR:Array = [6766,6767,6768,6769,6770,6771];
      
      public static const BOSS_NAME_ARR:Array = ["姜奇斯","闪光依兰特斯","史塔克","波切尔","芒克","雷恩"];
      
      public static const SCENE_MAP:String = "TheGrinchofTheWailingWallSc";
      
      public static const MC_MAP:String = "TheGrinchofTheWailingWallMc";
      
      private static var _activity:ActivityXMLInfo;
      
      private static var _map:MapModel;
      
      private static var _curStep:int = 0;
      
      private static var _taskMc:MovieClip = null;
      
      private static var _tempValue:Array = [0,0,0,0,0,0];
      
      private static var tempFlag:int = 1;
      
      private static var fightBossFlag:int = 0;
       
      
      public function TheGrinchofTheWailingWallController()
      {
         super();
      }
      
      public static function start() : void
      {
         ResourceManager.getResource(ClientConfig.getMapAnimate(MC_MAP),function(param1:MovieClip):void
         {
            _activity = new ActivityXMLInfo("2016/0325/TheGrinchofTheWailingWall",param1);
            playMainStory();
         },"animation");
         ResourceManager.getResource(ClientConfig.getMapAnimate(SCENE_MAP),function(param1:MovieClip):void
         {
            _taskMc = param1;
            _taskMc.addEventListener(MouseEvent.CLICK,onMcMouseClick);
            FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,fightOverHandler);
         },"scene");
      }
      
      public static function playMainStory() : void
      {
         if(!BitBuffSetClass.getState(BUFFER_ID[4]))
         {
            KTool.changeMapWithCallBack(MAP_ID_ARR[3],function():void
            {
               _activity.playStory(1,function():void
               {
                  BitBuffSetClass.setState(BUFFER_ID[4],1);
                  ModuleManager.showAppModule("TheGrinchofTheWailingWallPanel");
               });
            });
         }
      }
      
      public static function goMcIndex(param1:int) : void
      {
         var index:int = param1;
         var mapId:int = 0;
         switch(index)
         {
            case 1:
            case 2:
               mapId = int(MAP_ID_ARR[0]);
               break;
            case 3:
            case 4:
            case 5:
               mapId = int(MAP_ID_ARR[1]);
               break;
            case 6:
            case 7:
            case 8:
               mapId = int(MAP_ID_ARR[2]);
               break;
            case 9:
            case 10:
            case 11:
               mapId = int(MAP_ID_ARR[3]);
         }
         KTool.changeMapWithCallBack(mapId,function():void
         {
            _map = MapManager.currentMap;
            _map.controlLevel.addChild(_taskMc);
            _taskMc.gotoAndStop(index);
            LevelManager.iconLevel.visible = false;
            LevelManager.toolsLevel.visible = false;
            switch(index)
            {
               case 1:
                  if(BitBuffSetClass.getState(BUFFER_ID[0]))
                  {
                     goMcIndex(2);
                  }
                  else
                  {
                     _activity.playStory(10,function():void
                     {
                        BitBuffSetClass.setState(BUFFER_ID[0],1);
                        goMcIndex(2);
                     });
                  }
                  break;
               case 2:
                  updateData(1,function():void
                  {
                     var i:int;
                     _taskMc["txt_1"].text = _tempValue[0] + "/8";
                     i = 1;
                     while(i <= 8)
                     {
                        if(KTool.getBit(_tempValue[1],i) == 1)
                        {
                           _taskMc["hand_" + i].visible = false;
                           _taskMc["good_" + i].visible = false;
                        }
                        i++;
                     }
                     if(_tempValue[0] == 8)
                     {
                        CommonUI.setEnabled(_taskMc["onekey"],false,true);
                        SocketConnection.send(45633,1,0);
                        ModuleManager.showAppModule("TheGrinchofTheWailingWallPanel",1);
                     }
                     if(_tempValue[0] != _tempValue[2])
                     {
                        _activity.playStory(2 + _tempValue[0] - 1,function():void
                        {
                           LevelManager.iconLevel.visible = false;
                        });
                     }
                  });
                  break;
               case 3:
                  if(BitBuffSetClass.getState(BUFFER_ID[1]))
                  {
                     goMcIndex(4);
                  }
                  else
                  {
                     _activity.playStory(11,function():void
                     {
                        BitBuffSetClass.setState(BUFFER_ID[1],1);
                        goMcIndex(4);
                     });
                  }
                  break;
               case 4:
                  updateData(2,function():void
                  {
                     if(_tempValue[3] == 1)
                     {
                        goMcIndex(5);
                     }
                  });
                  break;
               case 5:
                  _activity.playStory(13,function():void
                  {
                     SocketConnection.send(45633,2,0);
                     ModuleManager.showAppModule("TheGrinchofTheWailingWallPanel",2);
                  });
                  break;
               case 6:
                  if(BitBuffSetClass.getState(BUFFER_ID[2]))
                  {
                     goMcIndex(7);
                  }
                  else
                  {
                     _activity.playStory(14,function():void
                     {
                        BitBuffSetClass.setState(BUFFER_ID[2],1);
                        goMcIndex(7);
                     });
                  }
                  break;
               case 7:
                  updateData(3,function():void
                  {
                     _taskMc["txt_1"].text = _tempValue[4] + "/3";
                     if(_tempValue[4] == 3)
                     {
                        goMcIndex(8);
                     }
                  });
                  break;
               case 8:
                  _activity.playStory(15,function():void
                  {
                     SocketConnection.send(45633,3,0);
                     ModuleManager.showAppModule("TheGrinchofTheWailingWallPanel",3);
                  });
                  break;
               case 9:
                  if(BitBuffSetClass.getState(BUFFER_ID[3]))
                  {
                     goMcIndex(10);
                  }
                  else
                  {
                     _activity.playStory(16,function():void
                     {
                        BitBuffSetClass.setState(BUFFER_ID[3],1);
                        goMcIndex(10);
                     });
                  }
                  break;
               case 10:
                  updateData(4,function():void
                  {
                     var _loc1_:int = 1;
                     while(_loc1_ <= 4)
                     {
                        if(KTool.getBit(_tempValue[5],_loc1_) == 1)
                        {
                           _taskMc["npc_" + _loc1_].visible = false;
                           _taskMc["hand_" + _loc1_].visible = false;
                        }
                        _loc1_++;
                     }
                     _taskMc["txt_1"].text = _tempValue[6] + "/4";
                     if(_tempValue[6] == 4)
                     {
                        goMcIndex(11);
                     }
                  });
                  break;
               case 11:
                  _activity.playStory(18,function():void
                  {
                     SocketConnection.send(45633,4,0);
                     ModuleManager.showAppModule("TheGrinchofTheWailingWallPanel",4);
                  });
            }
         });
      }
      
      public static function onMcMouseClick(param1:MouseEvent) : void
      {
         var namIndex:int = 0;
         var e:MouseEvent = param1;
         var index:int = int(e.currentTarget.currentFrame);
         var objNam:String = String(e.target.name);
         namIndex = int(e.target.name.split("_")[1]);
         switch(objNam)
         {
            case "mc":
               switch(index)
               {
                  case 4:
                     if(tempFlag == 1)
                     {
                        _activity.playStory(12,function():void
                        {
                           FightManager.fightNoMapBoss(BOSS_NAME_ARR[1],BOSS_ID_ARR[1]);
                        },function():void
                        {
                           tempFlag = 2;
                        });
                     }
                     else
                     {
                        _activity.playStory(19,function():void
                        {
                           FightManager.fightNoMapBoss(BOSS_NAME_ARR[1],BOSS_ID_ARR[1]);
                        },function():void
                        {
                           tempFlag = 2;
                           LevelManager.iconLevel.visible = false;
                        });
                     }
                     break;
                  case 7:
                     Alert.show("即将进入战斗，你准备好了吗？",function():void
                     {
                        FightManager.tryFight(377,[0,0,0,0]);
                        PetFightModel.status = PetFightModel.FIGHT_WITH_BOSS;
                        fightBossFlag = 2;
                     });
               }
         }
         switch(index)
         {
            case 2:
               switch(objNam)
               {
                  case "good_" + namIndex:
                     SocketConnection.sendWithCallback(45633,function():void
                     {
                        goMcIndex(2);
                        if(_tempValue[0] % 2 == 0)
                        {
                           PetFightModel.status = PetFightModel.FIGHT_WITH_BOSS;
                           fightBossFlag = 1;
                        }
                     },5,_tempValue[0] + 1);
                     break;
                  case "exit":
                     ModuleManager.showAppModule("TheGrinchofTheWailingWallPanel");
                     break;
                  case "onekey":
                     KTool.buyProductByCallback(247015,1,function():void
                     {
                        KTool.doExchange(8607,function():void
                        {
                           SocketConnection.send(45633,1,0);
                           Alarm.show("恭喜你完成Step1，快去看看墓碑记载着什么！",function():void
                           {
                              ModuleManager.showAppModule("TheGrinchofTheWailingWallPanel",1);
                           });
                        });
                     });
               }
               break;
            case 4:
               switch(objNam)
               {
                  case "exit":
                     ModuleManager.showAppModule("TheGrinchofTheWailingWallPanel");
                     break;
                  case "onekey":
                     KTool.buyProductByCallback(247016,1,function():void
                     {
                        KTool.doExchange(8608,function():void
                        {
                           goMcIndex(5);
                        });
                     });
               }
               break;
            case 7:
               switch(objNam)
               {
                  case "exit":
                     ModuleManager.showAppModule("TheGrinchofTheWailingWallPanel");
                     break;
                  case "onekey":
                     KTool.buyProductByCallback(247017,1,function():void
                     {
                        KTool.doExchange(8609,function():void
                        {
                           goMcIndex(8);
                        });
                     });
               }
               break;
            case 10:
               switch(objNam)
               {
                  case "exit":
                     ModuleManager.showAppModule("TheGrinchofTheWailingWallPanel");
                     break;
                  case "onekey":
                     KTool.buyProductByCallback(247018,1,function():void
                     {
                        KTool.doExchange(8610,function():void
                        {
                           goMcIndex(11);
                        });
                     });
                     break;
                  case "npc_" + namIndex:
                     _activity.playStory(17,function():void
                     {
                        FightManager.fightNoMapBoss(BOSS_NAME_ARR[2 + namIndex - 1],BOSS_ID_ARR[2 + namIndex - 1]);
                     },function():void
                     {
                        LevelManager.iconLevel.visible = false;
                     });
               }
         }
      }
      
      public static function fightOverHandler(param1:PetFightEvent) : void
      {
         var _loc2_:FightOverInfo = param1.dataObj as FightOverInfo;
         var _loc3_:* = _loc2_.winnerID == MainManager.actorID;
         switch(PetFightModel.status)
         {
            case PetFightModel.FIGHT_WITH_BOSS:
               if(fightBossFlag == 1)
               {
                  goMcIndex(2);
                  fightBossFlag = 0;
                  return;
               }
               if(fightBossFlag == 2)
               {
                  goMcIndex(7);
                  fightBossFlag = 0;
                  return;
               }
               switch(FightManager.currentBossRegion)
               {
                  case BOSS_ID_ARR[0]:
                     goMcIndex(2);
                     break;
                  case BOSS_ID_ARR[1]:
                     if(_loc3_)
                     {
                        goMcIndex(5);
                     }
                     else
                     {
                        goMcIndex(4);
                     }
                     break;
                  case BOSS_ID_ARR[2]:
                  case BOSS_ID_ARR[3]:
                  case BOSS_ID_ARR[4]:
                  case BOSS_ID_ARR[5]:
                     if(_loc3_ && _tempValue[5] == 4)
                     {
                        goMcIndex(11);
                     }
                     else
                     {
                        goMcIndex(10);
                     }
               }
               break;
            case PetFightModel.FIGHT_WITH_NPC:
               var _loc4_:* = PetFightModel.defaultNpcID;
               switch(0)
               {
               }
         }
      }
      
      public static function updateData(param1:int = 0, param2:Function = null) : void
      {
         var index:int = param1;
         var func:Function = param2;
         switch(index)
         {
            case 1:
               KTool.getMultiValue([3873],function(param1:Array):void
               {
                  _tempValue[2] = _tempValue[0];
                  _tempValue[1] = param1[0];
                  var _loc2_:int = 0;
                  do
                  {
                     _loc2_ += param1[0] & 1;
                  }
                  while(param1[0] = param1[0] >> 1);
                  
                  _tempValue[0] = _loc2_;
                  if(func != null)
                  {
                     func();
                  }
               });
               break;
            case 2:
               KTool.getMultiValue([3874],function(param1:Array):void
               {
                  _tempValue[3] = KTool.getBit(param1[0],1);
                  if(func != null)
                  {
                     func();
                  }
               });
               break;
            case 3:
               KTool.getMultiValue([3874],function(param1:Array):void
               {
                  _tempValue[4] = KTool.getBit(param1[0],2) + KTool.getBit(param1[0],3) + KTool.getBit(param1[0],4);
                  if(func != null)
                  {
                     func();
                  }
               });
               break;
            case 4:
               KTool.getMultiValue([3874],function(param1:Array):void
               {
                  _tempValue[5] = param1[0] >> 4;
                  param1[0] = _tempValue[5];
                  var _loc2_:int = 0;
                  do
                  {
                     _loc2_ += param1[0] & 1;
                  }
                  while(param1[0] = param1[0] >> 1);
                  
                  _tempValue[6] = _loc2_;
                  if(func != null)
                  {
                     func();
                  }
               });
         }
      }
      
      public static function destroy() : void
      {
         if(_taskMc != null)
         {
            _taskMc.removeEventListener(MouseEvent.CLICK,onMcMouseClick);
            FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,fightOverHandler);
            _taskMc = null;
            _map = null;
            _activity = null;
         }
      }
   }
}
