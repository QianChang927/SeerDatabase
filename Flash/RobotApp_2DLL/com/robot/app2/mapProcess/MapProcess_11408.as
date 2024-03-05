package com.robot.app2.mapProcess
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.linkManager.LinkToUrlManager;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.component.CollectionComponet;
   import com.robot.app2.control.StaticObjectControll;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.mode.components.EventComponent;
   import com.robot.core.mode.components.IComponent;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.utils.BitUtils;
   import flash.events.MouseEvent;
   import flash.utils.clearInterval;
   import flash.utils.setInterval;
   import org.taomee.events.SocketEvent;
   
   public class MapProcess_11408 extends BaseMapProcess
   {
       
      
      private var _eventComp:EventComponent;
      
      private var _components:Vector.<IComponent>;
      
      private var _num:int;
      
      private var collectionComp:CollectionComponet;
      
      private var _collectNum:int;
      
      private var _index:int;
      
      private var _bitValue:Array;
      
      public function MapProcess_11408()
      {
         this._components = new Vector.<IComponent>();
         super();
      }
      
      override public function destroy() : void
      {
         LevelManager.toolsLevel.visible = true;
         LevelManager.iconLevel.visible = true;
         var _loc1_:int = int(this._components.length);
         var _loc2_:int = 0;
         while(_loc2_ < _loc1_)
         {
            this._components[_loc2_].destroy();
            _loc2_++;
         }
         super.destroy();
      }
      
      override protected function init() : void
      {
         LevelManager.toolsLevel.visible = false;
         LevelManager.iconLevel.visible = false;
         this._num = 0;
         this._eventComp = new EventComponent();
         this._components.push(this._eventComp);
         this.restart();
         this._eventComp.addClickEvent(topLevel["close"],function():void
         {
            MapManager.changeMapWithCallback(1,function():void
            {
               ModuleManager.showAppModule("MillionTitanSendMainPanel");
            });
         });
         this._eventComp.addClickEvent(topLevel["vipBtn"],function():void
         {
            LinkToUrlManager.linkUrl(LinkToUrlManager.LINK_TYPE_4);
         });
         super.init();
      }
      
      private function initTop() : void
      {
         topLevel["numTxt"].text = this._collectNum + "/10";
         ItemManager.updateAndGetItemsNum([1711480],function(param1:Array):void
         {
            topLevel["itemTxt"].text = param1[0];
         });
      }
      
      private function restart() : void
      {
         KTool.getMultiValue([18120,18119],function(param1:Array):void
         {
            collectionComp = new CollectionComponet(conLevel,3000,6,collectionCallBack,clickHandle,"btn_");
            _components.push(collectionComp);
            _eventComp.addClickEvent(conLevel["bossBtn"],clickBoss);
            _collectNum = 10 - param1[0];
            _num = 0;
            _bitValue = [0,0,0,0,0,0];
            var _loc2_:* = BitUtils.getBit(param1[1],3) == 1;
            conLevel["bossBtn"].visible = _loc2_;
            collectionComp.collectEnable = !_loc2_;
            var _loc3_:int = 0;
            if(StaticObjectControll.getObjectByKey("MillionTitanSendTask_task3") != null)
            {
               _num = StaticObjectControll.getObjectByKey("MillionTitanSendTask_task3");
               _bitValue = StaticObjectControll.getObjectByKey("MillionTitanSendTask_task3_bitValue");
               _loc3_ = 1;
               while(_loc3_ <= 6)
               {
                  conLevel["btn_" + _loc3_].visible = false;
                  if(_bitValue[_loc3_ - 1] == 1 || _bitValue[_loc3_ - 1] == 2)
                  {
                     conLevel["btn_" + _loc3_].visible = true;
                     if(_bitValue[_loc3_ - 1] == 2 && _loc2_)
                     {
                        conLevel["bossBtn"].x = conLevel["btn_" + _loc3_].x + 43;
                        conLevel["bossBtn"].y = conLevel["btn_" + _loc3_].y - 61;
                     }
                  }
                  _loc3_++;
               }
               cd();
            }
            else
            {
               _loc3_ = 1;
               while(_loc3_ <= 6)
               {
                  conLevel["btn_" + _loc3_].visible = false;
                  if(Math.random() * 60 <= 20 || _loc3_ > 4 && _num < 2)
                  {
                     conLevel["btn_" + _loc3_].visible = true;
                     ++_num;
                     _bitValue[_loc3_ - 1] = 1;
                     if(_loc2_ && _bitValue.indexOf(2) == -1)
                     {
                        conLevel["bossBtn"].x = conLevel["btn_" + _loc3_].x + 43;
                        conLevel["bossBtn"].y = conLevel["btn_" + _loc3_].y - 61;
                        _bitValue[_loc3_ - 1] = 2;
                     }
                  }
                  _loc3_++;
               }
               StaticObjectControll.setObjectByKey("MillionTitanSendTask_task3",_num);
               StaticObjectControll.setObjectByKey("MillionTitanSendTask_task3_bitValue",_bitValue);
            }
            initTop();
         });
      }
      
      private function clickBoss(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         var bitValue:Array = StaticObjectControll.getObjectByKey("MillionTitanSendTask_task3_bitValue");
         bitValue[bitValue.indexOf(2)] = 0;
         StaticObjectControll.setObjectByKey("MillionTitanSendTask_task3_bitValue",bitValue);
         FightManager.fightNoMapBoss("",8331,false,true,function():void
         {
            if(!FightManager.isWin)
            {
               Alarm.show("很遗憾！你的灵玉被它抢走了。");
            }
         });
      }
      
      private function clickHandle(param1:MouseEvent) : void
      {
         if(this._collectNum > 0)
         {
            this.collectionComp.start();
         }
         else
         {
            Alarm.show("今日的采集次数已经满咯！明天再来吧！");
         }
      }
      
      private function collectionCallBack(param1:int) : void
      {
         var i:int = param1;
         --this._num;
         StaticObjectControll.setObjectByKey("MillionTitanSendTask_task3",this._num);
         SocketConnection.sendByQueue(42313,[3,0],function(param1:SocketEvent):void
         {
            var e:SocketEvent = param1;
            KTool.getMultiValue([18119,18120],function(param1:Array):void
            {
               var _loc2_:Array = null;
               _collectNum = 10 - param1[1];
               initTop();
               if(BitUtils.getBit(param1[0],3) == 1)
               {
                  _index = i;
                  conLevel["bossBtn"].x = conLevel["btn_" + i].x + 43;
                  conLevel["bossBtn"].y = conLevel["btn_" + i].y - 61;
                  conLevel["bossBtn"].visible = true;
                  Alarm.show("不好！有小精灵也要来抢夺！快击败它！");
                  _loc2_ = StaticObjectControll.getObjectByKey("MillionTitanSendTask_task3_bitValue");
                  _loc2_[_index - 1] = 2;
                  StaticObjectControll.setObjectByKey("MillionTitanSendTask_task3_bitValue",_loc2_);
                  collectionComp.collectEnable = false;
               }
               else
               {
                  collectionComp.collectEnable = true;
                  conLevel["btn_" + i].visible = false;
                  conLevel["bossBtn"].visible = false;
                  cd();
               }
            });
         });
      }
      
      private function cd() : void
      {
         var id:int = 0;
         if(this._num <= 0)
         {
            this.collectionComp.destroy();
            id = int(setInterval(function():void
            {
               StaticObjectControll.setObjectByKey("MillionTitanSendTask_task3",null);
               StaticObjectControll.setObjectByKey("MillionTitanSendTask_task3_bitValue",null);
               clearInterval(id);
               restart();
            },2000));
         }
      }
   }
}
