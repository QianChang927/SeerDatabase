package com.robot.app2.mapProcess
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.control.DialogControl;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm2;
   import com.robot.core.ui.alert.Alert;
   import com.robot.core.utils.BitUtils;
   import com.robot.core.utils.CommonUI;
   import flash.events.MouseEvent;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   
   public class MapProcess_1712 extends BaseMapProcess
   {
       
      
      private var _state:int = 0;
      
      private var _cocoliState:int = 0;
      
      private var _curCount:int;
      
      private var bitOpen:Boolean = false;
      
      private var itemCount1:int;
      
      private var itemCount2:int;
      
      private var itemCount3:int;
      
      private var result:int;
      
      public function MapProcess_1712()
      {
         super();
      }
      
      override protected function init() : void
      {
         super.init();
         topLevel.mouseChildren = false;
         topLevel.mouseEnabled = false;
         conLevel.addEventListener(MouseEvent.CLICK,this.onConclickHandle);
         conLevel["playMc_1"].visible = false;
         conLevel["playMc_2"].visible = false;
         conLevel["ani"].visible = false;
         conLevel["page"].visible = false;
         this.update();
      }
      
      private function update() : void
      {
         KTool.getMultiValue([124338,11913],function(param1:Array):void
         {
            _state = param1[0];
            _cocoliState = param1[1];
            if(BitUtils.getBit(_state,2) == 0)
            {
               conLevel["interaction1Btn"].visible = true;
            }
            else
            {
               conLevel["interaction1Btn"].visible = false;
            }
            if(BitUtils.getBit(_state,3) == 0)
            {
               conLevel["interaction2Btn"].visible = true;
            }
            else
            {
               conLevel["interaction2Btn"].visible = false;
            }
            if(KTool.getBit(param1[1],9) > 0)
            {
               conLevel["bossBtn"].visible = true;
            }
            else
            {
               conLevel["bossBtn"].visible = false;
            }
         });
      }
      
      private function updateDisplay() : void
      {
         conLevel["page"].visible = true;
         conLevel["page"]["aniMc"].visible = false;
         KTool.getMultiValue([11913],function(param1:Array):void
         {
            var va:Array = param1;
            _curCount = 6 - KTool.subByte(va[0],0,8);
            ItemManager.updateItems([1726487,1726488,1726489],function():void
            {
               itemCount1 = ItemManager.getNumByID(1726487);
               itemCount2 = ItemManager.getNumByID(1726488);
               itemCount3 = ItemManager.getNumByID(1726489);
               conLevel["page"]["numTxt_1"].text = _curCount;
               conLevel["page"]["numTxt_2"].text = itemCount1;
               conLevel["page"]["numTxt_3"].text = itemCount2;
               conLevel["page"]["numTxt_4"].text = itemCount3;
               CommonUI.setEnabled(conLevel["page"]["mcc_1"],_curCount > 0);
               CommonUI.setEnabled(conLevel["page"]["mcc_2"],itemCount1 > 0);
               CommonUI.setEnabled(conLevel["page"]["mcc_3"],itemCount2 > 0);
               CommonUI.setEnabled(conLevel["page"]["mcc_4"],itemCount3 > 0);
            });
         });
      }
      
      private function onConclickHandle(param1:MouseEvent) : void
      {
         var index1:int = 0;
         var e:MouseEvent = param1;
         var btnName:String = String(e.target.name);
         var index:int = int(KTool.getIndex(e.target));
         switch(btnName)
         {
            case "interaction1Btn":
               DialogControl.showAllDilogs(172,5).then(function(param1:int):void
               {
                  var va:int = param1;
                  if(va == 1)
                  {
                     conLevel["playMc_1"].visible = true;
                     AnimateManager.playMcAnimate(conLevel["playMc_1"],1,"mc1",function():void
                     {
                        conLevel["playMc_1"].visible = false;
                        DialogControl.showAllDilogs(172,6).then(function(param1:int):void
                        {
                           var va:int = param1;
                           if(BitUtils.getBit(_state,2) == 0)
                           {
                              KTool.socketSendCallBack(41900,function():void
                              {
                                 update();
                              },[103,3]);
                           }
                        });
                     },false,true);
                  }
               });
               break;
            case "interaction2Btn":
               DialogControl.showAllDilogs(172,7).then(function(param1:int):void
               {
                  var va:int = param1;
                  conLevel["playMc_2"].visible = true;
                  AnimateManager.playMcAnimate(conLevel["playMc_2"],1,"mc1",function():void
                  {
                     conLevel["playMc_2"].visible = false;
                     KTool.socketSendCallBack(41900,function():void
                     {
                        update();
                     },[103,4]);
                  },false,true);
               });
               break;
            case "gotoPanel":
               this.bitOpen = false;
               conLevel["page"].visible = false;
               ModuleManager.showAppModule("ExploreAmysteryShuiYinHuMainPanel");
               break;
            case "pageClose":
            case "salvageBtn":
               if(this.bitOpen == false)
               {
                  this.bitOpen = true;
                  this.updateDisplay();
               }
               else
               {
                  this.bitOpen = false;
                  conLevel["page"].visible = false;
               }
               break;
            case "bossBtn":
               Alert.show("发现一只可爱的波波鱼，是否要进入挑战？",function():void
               {
                  FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,function(param1:PetFightEvent):void
                  {
                     FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,arguments.callee);
                     if(!FightManager.isWin)
                     {
                        Alarm2.show("波波鱼重新没入水中");
                     }
                  });
                  FightManager.fightNoMapBoss("",18702);
               });
               break;
            case "salvageBtn_" + index:
               if(KTool.getBit(this._cocoliState,9) > 0)
               {
                  Alarm2.show("波波鱼露出了水面，请先挑战波波鱼。");
               }
               else if(index == 1)
               {
                  if(this._curCount > 0)
                  {
                     StatManager.sendStat2014("1213探秘水银湖生命","进行打捞","2024运营活动");
                     conLevel["page"]["aniMc"].visible = true;
                     AnimateManager.playMcAnimate(conLevel["page"],1,"aniMc",function():void
                     {
                        conLevel["page"]["aniMc"].visible = false;
                        bitOpen = false;
                        conLevel["page"].visible = false;
                        SocketConnection.sendByQueue(45850,[31,1],function(param1:SocketEvent):void
                        {
                           result = ByteArray(param1.data).readInt();
                           if(result == 1)
                           {
                              Alarm2.show("成功打捞到了少量破损零件。");
                           }
                           else if(result == 2)
                           {
                              Alarm2.show("成功打捞到了少量星银碎屑。");
                           }
                           else if(result == 3)
                           {
                              Alarm2.show("成功打捞到了少量雷纹残片。");
                           }
                           else
                           {
                              Alarm2.show("似乎出现了什么奇怪的动静。");
                           }
                           update();
                        });
                     },false,true);
                  }
               }
               else if(index == 2)
               {
                  if(this.itemCount1 > 0)
                  {
                     StatManager.sendStat2014("1213探秘水银湖生命","投入星银合金","2024运营活动");
                     conLevel["ani"].visible = true;
                     this.bitOpen = false;
                     conLevel["page"].visible = false;
                     AnimateManager.playMcAnimate(conLevel["ani"],1,"aniMcc",function():void
                     {
                        conLevel["ani"].visible = false;
                        SocketConnection.sendByQueue(45850,[31,2],function(param1:SocketEvent):void
                        {
                           result = ByteArray(param1.data).readInt();
                           if(result == 1)
                           {
                              Alarm2.show("一脸疑惑的波波鱼的出现了！");
                           }
                           else if(result == 2)
                           {
                              Alarm2.show("投入了星银合金，似乎无事发生。 ");
                           }
                           update();
                        });
                     },false,true);
                  }
               }
               else if(index == 3)
               {
                  if(this.itemCount2 > 0)
                  {
                     StatManager.sendStat2014("1213探秘水银湖生命","投入机电单元","2024运营活动");
                     conLevel["ani"].visible = true;
                     this.bitOpen = false;
                     conLevel["page"].visible = false;
                     AnimateManager.playMcAnimate(conLevel["ani"],1,"aniMcc",function():void
                     {
                        conLevel["ani"].visible = false;
                        SocketConnection.sendByQueue(45850,[31,3],function(param1:SocketEvent):void
                        {
                           result = ByteArray(param1.data).readInt();
                           if(result == 1)
                           {
                              Alarm2.show("一脸疑惑的波波鱼的出现了！");
                           }
                           else if(result == 2)
                           {
                              Alarm2.show("投入了机电单元，似乎无事发生。   ");
                           }
                           update();
                        });
                     },false,true);
                  }
               }
               else if(this.itemCount3 > 0)
               {
                  StatManager.sendStat2014("1213探秘水银湖生命","投入雷银能量块","2024运营活动");
                  conLevel["ani"].visible = true;
                  this.bitOpen = false;
                  conLevel["page"].visible = false;
                  AnimateManager.playMcAnimate(conLevel["ani"],1,"aniMcc",function():void
                  {
                     conLevel["ani"].visible = false;
                     SocketConnection.sendByQueue(45850,[31,4],function(param1:SocketEvent):void
                     {
                        result = ByteArray(param1.data).readInt();
                        if(result == 1)
                        {
                           Alarm2.show("一脸疑惑的波波鱼的出现了！");
                        }
                        else if(result == 2)
                        {
                           Alarm2.show("投入了雷银能量块，似乎无事发生。 ");
                        }
                        update();
                     });
                  },false,true);
               }
         }
      }
      
      override public function destroy() : void
      {
         conLevel.removeEventListener(MouseEvent.CLICK,this.onConclickHandle);
         super.destroy();
      }
   }
}
