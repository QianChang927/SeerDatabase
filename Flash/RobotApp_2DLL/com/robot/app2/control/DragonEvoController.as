package com.robot.app2.control
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.mapProcess.MapProcess_1040;
   import com.robot.app.mapProcess.MapProcess_1047;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.MapEvent;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.newloader.SeerUrlLoader;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.ui.alert.Alert;
   import com.robot.core.zip.PreloadZipXMLController;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.utils.setTimeout;
   import org.taomee.manager.DepthManager;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class DragonEvoController
   {
      
      private static var configXml:XML;
      
      private static var times1:Array = [];
      
      private static var times2:Array = [];
      
      private static var npcPosi:Array = [];
      
      private static var entryPosi:Array = [];
      
      private static var npcVisible:Boolean;
      
      private static var npcLong:MovieClip;
      
      private static var npcMap:int;
      
      private static var npcX:int;
      
      private static var npcY:int;
      
      private static var npcDir:int;
      
      private static var entryMC1:MovieClip;
      
      private static var entryObj1:Object;
      
      private static var timeObj1:Object;
      
      private static var entryMC2:MovieClip;
      
      private static var entryObj2:Object;
      
      private static var timeObj2:Object;
       
      
      public function DragonEvoController()
      {
         super();
      }
      
      public static function start() : void
      {
         var loader:SeerUrlLoader = new SeerUrlLoader("加载配置文件");
         var url:String = "xml/dragonEvo.xml";
         PreloadZipXMLController.getXML("dragonEvo.xml",function(param1:*):void
         {
            configXml = new XML(param1);
            setUp();
         });
      }
      
      public static function setUp() : void
      {
         var _loc4_:Object = null;
         var _loc5_:XML = null;
         var _loc1_:XMLList = configXml.elements("time1")[0].elements("t");
         var _loc2_:XMLList = configXml.elements("npcPosi")[0].elements("npc");
         var _loc3_:XMLList = configXml.elements("entry")[0].elements("map");
         for each(_loc5_ in _loc1_)
         {
            (_loc4_ = new Object()).start = String(_loc5_.@start);
            _loc4_.end = String(_loc5_.@end);
            times1.push(_loc4_);
         }
         _loc1_ = configXml.elements("time2")[0].elements("t");
         for each(_loc5_ in _loc1_)
         {
            (_loc4_ = new Object()).start = String(_loc5_.@start);
            _loc4_.end = String(_loc5_.@end);
            times2.push(_loc4_);
         }
         for each(_loc5_ in _loc2_)
         {
            (_loc4_ = new Object()).mapID = int(_loc5_.@mapID);
            _loc4_.x = int(_loc5_.@x);
            _loc4_.y = int(_loc5_.@y);
            _loc4_.direction = int(_loc5_.@direction);
            npcPosi.push(_loc4_);
         }
         for each(_loc5_ in _loc3_)
         {
            (_loc4_ = new Object()).mapID = int(_loc5_.@mapID);
            _loc4_.x = int(_loc5_.@x);
            _loc4_.y = int(_loc5_.@y);
            _loc4_.direction = int(_loc5_.@direction);
            _loc4_.galaxy = String(_loc5_.@galaxy);
            _loc4_.planet = String(_loc5_.@planet);
            entryPosi.push(_loc4_);
         }
         initNPC();
      }
      
      public static function initNPC() : void
      {
         checkNpcPosi();
         MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,onMapChange);
         onMapChange();
      }
      
      public static function setNpcVisible(param1:Boolean) : void
      {
         npcVisible = param1;
         if(npcLong)
         {
            npcLong.visible = npcVisible;
         }
      }
      
      private static function onMapChange(param1:* = null) : void
      {
         var e:* = param1;
         if(!MapManager.currentMap)
         {
            return;
         }
         if(MapManager.currentMap.id == npcMap)
         {
            if(npcLong)
            {
               DisplayUtil.startAllMovieClip(npcLong);
               MapManager.currentMap.depthLevel.addChild(npcLong);
               DepthManager.swapDepthAll(MapManager.currentMap.depthLevel);
               npcLong.visible = npcVisible;
            }
            else
            {
               ResourceManager.getResource(ClientConfig.getMapAnimate("npcLong"),function(param1:MovieClip):void
               {
                  npcLong = param1;
                  npcLong.x = npcX;
                  npcLong.y = npcY;
                  npcLong.scaleX *= npcDir;
                  npcLong.buttonMode = true;
                  npcLong.mouseChildren = false;
                  npcLong.addEventListener(MouseEvent.CLICK,onLong);
                  onMapChange();
               });
            }
         }
         checkEntryPosi();
         if(Boolean(entryObj1) && MapManager.currentMap.id == entryObj1.mapID)
         {
            if(entryMC1)
            {
               DisplayUtil.startAllMovieClip(entryMC1);
               MapManager.currentMap.depthLevel.addChild(entryMC1);
               setTimeout(function():void
               {
                  onMapChange();
               },60000);
            }
            else
            {
               ResourceManager.getResource(ClientConfig.getMapAnimate("dragonEvoEntry"),function(param1:MovieClip):void
               {
                  entryMC1 = param1;
                  entryMC1.x = entryObj1.x;
                  entryMC1.y = entryObj1.y;
                  entryMC1.scaleX *= entryObj1.direction;
                  entryMC1.buttonMode = true;
                  entryMC1.mouseChildren = false;
                  entryMC1.addEventListener(MouseEvent.CLICK,onEntry);
                  onMapChange();
               });
            }
         }
         else if(entryMC1)
         {
            DisplayUtil.removeForParent(entryMC1);
         }
         if(Boolean(entryObj2) && MapManager.currentMap.id == entryObj2.mapID)
         {
            if(entryMC2)
            {
               DisplayUtil.startAllMovieClip(entryMC2);
               MapManager.currentMap.depthLevel.addChild(entryMC2);
               setTimeout(function():void
               {
                  onMapChange();
               },60000);
            }
            else
            {
               ResourceManager.getResource(ClientConfig.getMapAnimate("tigerEvoEntry"),function(param1:MovieClip):void
               {
                  entryMC2 = param1;
                  entryMC2.x = entryObj2.x;
                  entryMC2.y = entryObj2.y;
                  entryMC2.scaleX *= entryObj2.direction;
                  entryMC2.buttonMode = true;
                  entryMC2.mouseChildren = false;
                  entryMC2.addEventListener(MouseEvent.CLICK,onEntry);
                  onMapChange();
               });
            }
         }
         else if(entryMC2)
         {
            DisplayUtil.removeForParent(entryMC2);
         }
      }
      
      private static function checkNpcPosi() : void
      {
         npcMap = 1067;
         npcX = 380;
         npcY = 200;
         npcDir = 1;
      }
      
      public static function onLong(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         StatManager.sendStat2014("朱雀超进化","点击npc对话的","2015运营活动");
         DiamondDailyTaskController.tryFinish(7,29);
         NpcDialog.show(NPC.TWOBLONG2,["小赛尔，有什么事情找我吗？"],["我是来寻找炽凰•朱雀大人的！  ","我是来寻找苍魂青龙大人的！","我是来寻找天尊白虎大人的！","我没什么事，路过而已！"],[function():void
         {
            NpcDialog.show(NPC.TWOBLONG2,["炽凰•朱雀大人就在神火迷阵的尽头，神火迷阵每日开启5次，请在规定时间内通过迷阵即可挑战炽凰•朱雀了！"],["请告诉我神火迷阵的开启时间吧！","我受到炽凰•朱雀的认可了，请帮我超进化,谢谢!"],[function():void
            {
               NpcDialog.show(NPC.TWOBLONG2,["神火迷阵每天的开放时间为：12:30-13:00，18:30-19:00，20:00-20:30，21:00-21:30，22：00-22:30，你需要拥有朱雀挑战令才可进入神火迷阵！"],["我要获得朱雀挑战令！","我一定来！"],[function():void
               {
                  KTool.getMultiValue([11640],function(param1:Array):void
                  {
                     var a:Array = param1;
                     if(a[0])
                     {
                        NpcDialog.show(NPC.TWOBLONG2,["你今天已经通过了我的考验了，请明天再来！"],["我一定来！"],[function():void
                        {
                        }]);
                     }
                     else
                     {
                        NpcDialog.show(NPC.TWOBLONG2,["哦？想获得朱雀挑战令？那我得试试你有没有这个功夫了！你如果能够战胜我，那我就送你朱雀挑战令！"],["那就来吧！我是很厉害的！","我还是太弱了！"],[function():void
                        {
                           FightManager.fightNoMapBoss("苍魂青龙",3327);
                        }]);
                     }
                  });
               }]);
            },function():void
            {
               ModuleManager.showModule(ClientConfig.getAppModule("RosefinchEvoPanel"),"正在打开");
            }]);
         },function():void
         {
            NpcDialog.show(NPC.TWOBLONG2,["我可以帮助你找到苍魂青龙大人，如果你成功受到了他的认可我也可以帮你完成超进化。"],["请给我一些苍魂青龙位置的提示吧！","我受到苍魂青龙的认可了，请帮我超进化,谢谢!"],[function():void
            {
               var str:* = undefined;
               if(timeObj1)
               {
                  str = "0xff0000" + timeObj1.start + "--" + timeObj1.end + "0xffffff";
                  NpcDialog.show(NPC.TWOBLONG2,["嗯。。。也好，我会给你一个苍魂青龙所在地下一次出现的位置信息！当然，这并不是无偿的！苍魂青龙所在地下次出现时间是：" + str + "，那么你需要一个怎样的提示呢？"],["我要一个简单的提示！","我要一个高级提示！","请直接告诉我位置！"],[function():void
                  {
                     getGuide(0);
                  },function():void
                  {
                     getGuide(1);
                  },function():void
                  {
                     getGuide(2);
                  }]);
               }
               else
               {
                  NpcDialog.show(NPC.TWOBLONG2,["苍魂青龙所在地今天不会出现了，明天再找吧！"],["好吧"],[function():void
                  {
                  }]);
               }
            },function():void
            {
               ModuleManager.showModule(ClientConfig.getAppModule("DragonEvoPanel"),"正在打开");
            }]);
         },function():void
         {
            NpcDialog.show(NPC.TWOBLONG2,["我可以帮助你找到天尊白虎大人，如果你成功受到了他的认可我也可以帮你完成超进化。"],["请给我一些天尊白虎位置的提示吧！","我受到天尊白虎的认可了，请帮我超进化,谢谢!"],[function():void
            {
               var str:* = undefined;
               if(timeObj2)
               {
                  str = "0xff0000" + timeObj2.start + "--" + timeObj2.end + "0xffffff";
                  NpcDialog.show(NPC.TWOBLONG2,["嗯。。。也好，我会给你一个天尊白虎所在地下一次出现的位置信息！当然，这并不是无偿的！天尊白虎所在地下次出现时间是：" + str + "，那么你需要一个怎样的提示呢？"],["我是来接任务的！ ","我要一个简单的提示！","我要一个高级提示！","请直接告诉我位置！"],[function():void
                  {
                     ModuleManager.showModule(ClientConfig.getAppModule("DragonEvoTaskPanel"),"正在打开");
                  },function():void
                  {
                     getGuide(0,2);
                  },function():void
                  {
                     getGuide(1,2);
                  },function():void
                  {
                     getGuide(2,2);
                  }]);
               }
               else
               {
                  NpcDialog.show(NPC.TWOBLONG2,["天尊白虎所在地今天不会出现了，明天再找吧！"],["好吧"],[function():void
                  {
                  }]);
               }
            },function():void
            {
               ModuleManager.showModule(ClientConfig.getAppModule("TigerEvoPanel"),"正在打开");
            }]);
         }]);
      }
      
      private static function getGuide(param1:int, param2:int = 1) : void
      {
         var index:int = param1;
         var type:int = param2;
         switch(type)
         {
            case 1:
               if(entryObj1 == null)
               {
                  NpcDialog.show(NPC.TWOBLONG2,["苍魂青龙所在地还未出现，请等会再来。"],["好的"],[function():void
                  {
                  }]);
               }
               else
               {
                  switch(index)
                  {
                     case 0:
                        Alert.show("是否消耗20000赛尔豆得到提示？",function():void
                        {
                           if(MainManager.actorInfo.coins >= 20000)
                           {
                              KTool.doExchange(3904,function():void
                              {
                                 entryObj1.guideType = 1;
                                 entryObj1.time = timeObj1;
                                 ModuleManager.showModule(ClientConfig.getAppModule("DragonEvoGuidePanel"),"正在打开",entryObj1);
                              });
                           }
                           else
                           {
                              Alarm.show("你的赛尔豆不足！");
                           }
                        });
                        break;
                     case 1:
                        Alert.show("是否消耗2钻石，得到高级提示？",function():void
                        {
                           KTool.buyProductByCallback(241651,1,function():void
                           {
                              KTool.doExchange(3905,function():void
                              {
                                 entryObj1.time = timeObj1;
                                 entryObj1.guideType = 2;
                                 ModuleManager.showModule(ClientConfig.getAppModule("DragonEvoGuidePanel"),"正在打开",entryObj1);
                              });
                           });
                        });
                        break;
                     case 2:
                        Alert.show("是否消耗10钻石，直接得到位置？",function():void
                        {
                           KTool.buyProductByCallback(241652,1,function():void
                           {
                              KTool.doExchange(3906,function():void
                              {
                                 entryObj1.time = timeObj1;
                                 entryObj1.guideType = 3;
                                 ModuleManager.showModule(ClientConfig.getAppModule("DragonEvoGuidePanel"),"正在打开",entryObj1);
                              });
                           });
                        });
                  }
               }
               break;
            case 2:
               if(entryObj2 == null)
               {
                  NpcDialog.show(NPC.TWOBLONG2,["天尊白虎所在地还未出现，请等会再来。"],["好的"],[function():void
                  {
                  }]);
               }
               else
               {
                  switch(index)
                  {
                     case 0:
                        Alert.show("是否消耗20000赛尔豆得到提示？",function():void
                        {
                           if(MainManager.actorInfo.coins >= 20000)
                           {
                              KTool.doExchange(4215,function():void
                              {
                                 entryObj2.guideType = 1;
                                 entryObj2.time = timeObj2;
                                 ModuleManager.showModule(ClientConfig.getAppModule("TigerEvoGuidePanel"),"正在打开",entryObj2);
                              });
                           }
                           else
                           {
                              Alarm.show("你的赛尔豆不足！");
                           }
                        });
                        break;
                     case 1:
                        Alert.show("是否消耗2钻石，得到高级提示？",function():void
                        {
                           KTool.buyProductByCallback(241959,1,function():void
                           {
                              KTool.doExchange(4216,function():void
                              {
                                 entryObj2.time = timeObj2;
                                 entryObj2.guideType = 2;
                                 ModuleManager.showModule(ClientConfig.getAppModule("TigerEvoGuidePanel"),"正在打开",entryObj2);
                              });
                           });
                        });
                        break;
                     case 2:
                        Alert.show("是否消耗10钻石，直接得到位置？",function():void
                        {
                           KTool.buyProductByCallback(241960,1,function():void
                           {
                              KTool.doExchange(4217,function():void
                              {
                                 entryObj2.time = timeObj2;
                                 entryObj2.guideType = 3;
                                 ModuleManager.showModule(ClientConfig.getAppModule("TigerEvoGuidePanel"),"正在打开",entryObj2);
                              });
                           });
                        });
                  }
               }
         }
      }
      
      private static function onEntry(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         switch(e.target)
         {
            case entryMC1:
               KTool.getMultiValue([6132],function(param1:Array):void
               {
                  if(param1[0] == 0)
                  {
                     doEntry(false);
                  }
                  if(param1[0] > 8)
                  {
                     doEntry(false);
                  }
                  else
                  {
                     ModuleManager.showModule(ClientConfig.getAppModule("DragonEvoProcessPanel"),"正在打开",param1[0]);
                  }
               });
               break;
            case entryMC2:
               doEntry(false,2);
         }
      }
      
      public static function doEntry(param1:Boolean, param2:int = 1) : void
      {
         var buy:Boolean = param1;
         var type:int = param2;
         var param:int = 0;
         switch(type)
         {
            case 1:
               if(!checkDragonEntryAvailable())
               {
                  Alarm.show("这个入口已经消失了！");
                  return;
               }
               if(buy)
               {
                  param = 5;
               }
               SocketConnection.sendWithCallback(42111,function():void
               {
                  MapProcess_1040.lastProcess = 0;
                  MapManager.changeMap(1040);
                  switch(times1.indexOf(timeObj1))
                  {
                     case 0:
                        StatManager.sendStat2014("青龙超进化","在第1时段进入场景的",StatManager.RUN_ACT);
                        break;
                     case 1:
                        StatManager.sendStat2014("青龙超进化","在第2时段进入场景的",StatManager.RUN_ACT);
                        break;
                     case 2:
                        StatManager.sendStat2014("青龙超进化","在第3时段进入场景的",StatManager.RUN_ACT);
                        break;
                     case 3:
                        StatManager.sendStat2014("青龙超进化","在第4时段进入场景的",StatManager.RUN_ACT);
                        break;
                     case 4:
                        StatManager.sendStat2014("青龙超进化","在第5时段进入场景的",StatManager.RUN_ACT);
                        break;
                     case 5:
                        StatManager.sendStat2014("青龙超进化","在第6时段进入场景的",StatManager.RUN_ACT);
                  }
               },param,0);
               break;
            case 2:
               if(!checkTigerEntryAvailable())
               {
                  Alarm.show("这个入口已经消失了！");
                  return;
               }
               if(buy)
               {
                  param = 11;
               }
               else
               {
                  param = 10;
               }
               SocketConnection.sendWithCallback(42111,function():void
               {
                  MapProcess_1047.lastProcess = 0;
                  MapManager.changeMap(1047);
                  switch(times2.indexOf(timeObj2))
                  {
                     case 0:
                        StatManager.sendStat2014("白虎超进化","在第1时段进入场景的",StatManager.RUN_ACT);
                        break;
                     case 1:
                        StatManager.sendStat2014("白虎超进化","在第2时段进入场景的",StatManager.RUN_ACT);
                        break;
                     case 2:
                        StatManager.sendStat2014("白虎超进化","在第3时段进入场景的",StatManager.RUN_ACT);
                        break;
                     case 3:
                        StatManager.sendStat2014("白虎超进化","在第4时段进入场景的",StatManager.RUN_ACT);
                        break;
                     case 4:
                        StatManager.sendStat2014("白虎超进化","在第5时段进入场景的",StatManager.RUN_ACT);
                        break;
                     case 5:
                        StatManager.sendStat2014("白虎超进化","在第6时段进入场景的",StatManager.RUN_ACT);
                        break;
                     case 6:
                        StatManager.sendStat2014("白虎超进化","在第7时段进入场景的",StatManager.RUN_ACT);
                  }
               },param,0);
               break;
         }
      }
      
      public static function checkDragonEntryAvailable() : Boolean
      {
         checkEntryPosi();
         if(entryObj1)
         {
            return true;
         }
         if(entryMC1)
         {
            DisplayUtil.removeForParent(entryMC1);
         }
         return false;
      }
      
      public static function checkTigerEntryAvailable() : Boolean
      {
         checkEntryPosi();
         if(entryObj2)
         {
            return true;
         }
         if(entryMC2)
         {
            DisplayUtil.removeForParent(entryMC2);
         }
         return false;
      }
      
      private static function checkEntryPosi() : void
      {
         var _loc1_:String = null;
         var _loc2_:String = null;
         var _loc3_:int = 0;
         var _loc4_:Object = null;
         var _loc5_:Array = null;
         var _loc6_:Array = null;
         var _loc7_:Date = null;
         var _loc8_:int = 0;
         var _loc9_:int = 0;
         var _loc10_:int = 0;
         var _loc11_:int = 0;
         entryObj1 = null;
         timeObj1 = null;
         _loc11_ = 0;
         while(_loc11_ < times1.length)
         {
            _loc1_ = String((_loc4_ = times1[_loc11_]).start);
            _loc2_ = String(_loc4_.end);
            _loc5_ = _loc1_.split(":");
            _loc6_ = _loc2_.split(":");
            _loc8_ = (_loc7_ = SystemTimerManager.sysBJDate).hours;
            _loc9_ = _loc7_.minutes;
            if((_loc10_ = _loc8_ * 60 + _loc9_) >= _loc5_[0] * 60 + int(_loc5_[1]) && _loc10_ < _loc6_[0] * 60 + int(_loc6_[1]))
            {
               _loc3_ = int(getRandomNum(_loc11_) * entryPosi.length / 10000);
               entryObj1 = entryPosi[_loc3_];
               timeObj1 = _loc4_;
               break;
            }
            if(timeObj1 == null && _loc10_ < _loc5_[0] * 60 + int(_loc5_[1]))
            {
               timeObj1 = _loc4_;
            }
            _loc11_++;
         }
         entryObj2 = null;
         timeObj2 = null;
         _loc11_ = 0;
         while(_loc11_ < times2.length)
         {
            _loc1_ = String((_loc4_ = times2[_loc11_]).start);
            _loc2_ = String(_loc4_.end);
            _loc5_ = _loc1_.split(":");
            _loc6_ = _loc2_.split(":");
            _loc8_ = (_loc7_ = SystemTimerManager.sysBJDate).hours;
            _loc9_ = _loc7_.minutes;
            if((_loc10_ = _loc8_ * 60 + _loc9_) >= _loc5_[0] * 60 + int(_loc5_[1]) && _loc10_ < _loc6_[0] * 60 + int(_loc6_[1]))
            {
               _loc3_ = int(getRandomNum(_loc11_,1) * entryPosi.length / 10000);
               entryObj2 = entryPosi[_loc3_];
               timeObj2 = _loc4_;
               break;
            }
            if(timeObj2 == null && _loc10_ < _loc5_[0] * 60 + int(_loc5_[1]))
            {
               timeObj2 = _loc4_;
            }
            _loc11_++;
         }
      }
      
      private static function getRandomNum(param1:int, param2:int = 0) : int
      {
         var _loc3_:Date = SystemTimerManager.sysBJDate;
         var _loc4_:int = (_loc3_.fullYear + 5678) * (_loc3_.month + 1234) + (_loc3_.day + 2345) * (param1 + 4567);
         if(param2 == 0)
         {
            return _loc4_ % 10000;
         }
         var _loc5_:int = (_loc3_.fullYear + 1111) * (_loc3_.month + 5321) + (_loc3_.day + 6789) * (param1 + 1234);
         if(_loc4_ % 10000 == _loc5_ % 10000)
         {
            _loc5_ += 2222;
         }
         if(param2 == 1)
         {
            return _loc5_ % 10000;
         }
         return -1;
      }
   }
}
