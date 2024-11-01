package com.robot.module.app
{
   import com.robot.app2.control.DialogControl;
   import com.robot.app2.control.activityHelper.ActivityModel;
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.ui.alert.Alert;
   import com.robot.core.ui.loading.Loading;
   import com.robot.core.utils.CommonUI;
   import flash.display.MovieClip;
   import flash.utils.ByteArray;
   import gs.TweenLite;
   import org.taomee.events.SocketEvent;
   
   public class PumpkinGuessGame extends ActivityModel
   {
      private var paramType:int;
      
      private var paramLevel:int;
      
      private var ppTime1:int;
      
      private var ppTime2:int;
      
      private var coinCnt:int;
      
      private var isStart:Boolean = false;
      
      private var undefinedArr:Array;
      
      private var digCntRecord:int = 0;
      
      private var digTime:int;
      
      private var toolCntArr:Array;
      
      private var bombArr:Array;
      
      private var thornArr:Array;
      
      private var lastDigTime:int = 0;
      
      private var _isInAnim:Boolean;
      
      private var _isInSonar:Boolean = false;
      
      public function PumpkinGuessGame()
      {
         this.undefinedArr = [];
         super();
         resUrl = "2024/1101/PumpkinGuessGame";
         configUrl = "2024/1101/PumpkinGuessConfig";
      }
      
      override public function init(data:Object = null) : void
      {
         this.paramType = data[0];
         this.paramLevel = data[1];
         this.ppTime1 = data[2];
         this.ppTime2 = data[3];
      }
      
      override public function show() : void
      {
         super.show();
         ui.txtPPTme.text = this.ppTime1 + "/" + this.ppTime2;
         ui.mcSonar.gotoAndStop(1);
         ui.mcActor.gotoAndStop(this.paramType);
         if(Boolean(ui.mcLevel))
         {
            ui.mcLevel.gotoAndStop(this.paramLevel);
         }
         if(Boolean(ui.mcThornTip))
         {
            ui.mcThornTip.gotoAndStop(this.paramLevel + 2 * (this.paramType - 1));
         }
         ui.txtTime.text = "";
         ui.txtTool_1.text = "0";
         ui.txtTool_2.text = "0";
         ui.txtTool_3.text = "0";
         for(var i:int = 1; i <= 56; i++)
         {
            eventCom.addClickEvent(ui["block_" + i],this.onBlockClick);
            ui["block_" + i].gotoAndStop(1);
         }
      }
      
      private function onStart() : void
      {
         var buffId:int = 0;
         if(!this.isStart)
         {
            this.isStart = true;
            this.coinCnt = getValue("coinCnt");
            buffId = 24513;
            if(BitBuffSetClass.getState(buffId) == 0)
            {
               DialogControl.showAllDilogs(164,2).then(function():void
               {
                  BitBuffSetClass.setState(buffId,1);
               });
               return;
            }
         }
      }
      
      private function onBlockClick(e:*) : void
      {
         var eName:String;
         var lastDigTime:int = 0;
         var index:int = 0;
         var blockMc:MovieClip = null;
         var randOne:int = 0;
         var u:int = 0;
         if(this.isInAnim)
         {
            return;
         }
         lastDigTime = this.digTime;
         eName = e.target.name;
         index = int(e.target.parent.name.split("_")[1]);
         blockMc = ui[e.target.parent.name];
         if(this.isInSonar)
         {
            if(eName == "btnUndef")
            {
               randOne = index;
               ui.aniSonar.visible = true;
               _ui.aniSonar.x = ui["block_" + randOne].x;
               _ui.aniSonar.y = ui["block_" + randOne].y;
               this._isInAnim = true;
               for(u = 0; u < this.undefinedArr.length; u++)
               {
                  if(this.undefinedArr[u] != randOne)
                  {
                     ui["block_" + this.undefinedArr[u]].gotoAndStop(6);
                  }
               }
               if(this.undefinedArr.indexOf(randOne) >= 0)
               {
                  this.undefinedArr.splice(this.undefinedArr.indexOf(randOne),1);
               }
               AnimateManager.playMcAnimate(_ui.aniSonar,1,"",function():void
               {
                  ui.aniSonar.visible = false;
                  _isInAnim = false;
                  doAction("UseTool2",randOne).then(function(e:SocketEvent):void
                  {
                     var blockType:int = int(ByteArray(e.data).readUnsignedInt());
                     ui["block_" + randOne].gotoAndStop(blockType);
                     ui.mcSonar.gotoAndStop(1);
                     refresh().then(updateToolView);
                  });
               },false,true);
               this.isInSonar = false;
            }
            return;
         }
         if(eName != "btnBlock")
         {
            return;
         }
         if(this.digTime <= 0)
         {
            Alarm.show("挖掘次数不足！");
            return;
         }
         _ui.aniDig.visible = true;
         _ui.aniDig.x = blockMc.x;
         _ui.aniDig.y = blockMc.y;
         this._isInAnim = true;
         AnimateManager.playMcAnimate(_ui.aniDig,1,"",function():void
         {
            _isInAnim = false;
            _ui.aniDig.visible = false;
            doAction("Dig",index).then(function(e:SocketEvent):void
            {
               var blockType:int = 0;
               blockType = int(ByteArray(e.data).readUnsignedInt());
               ++digCntRecord;
               refresh().then(function():void
               {
                  var toolIndex:int = 0;
                  if(blockType <= 2)
                  {
                     blockMc.gotoAndStop(blockType);
                  }
                  else if(blockType >= 3 && blockType <= 5)
                  {
                     blockMc.gotoAndStop(blockType);
                     toolIndex = blockType - 2;
                     playToolMoveAnim(ui["tool_" + toolIndex],blockMc,ui["toolGo_" + toolIndex],function():void
                     {
                        ui["txtTool_" + toolIndex].text = toolCntArr[toolIndex - 1];
                        blockMc.gotoAndStop(2);
                     });
                  }
                  else if(blockType == 6)
                  {
                     blockMc.gotoAndStop(blockType);
                     undefinedArr.push(index);
                  }
                  else if(blockType == 7 || blockType == 8 || blockType == 9)
                  {
                     blockMc.gotoAndStop(blockType);
                  }
                  if(blockType == 10)
                  {
                     Alarm.show("小小金瓜");
                     blockMc.gotoAndStop(blockType);
                  }
                  else if(blockType == 11)
                  {
                     --lastDigTime;
                     lastDigTime = lastDigTime <= 0 ? 0 : lastDigTime;
                     ui.txtTime.text = lastDigTime;
                     playPkAnim(function():void
                     {
                        Alarm.show("你成功挖到了大南瓜！",function():void
                        {
                           ModuleManager.showAppModule("PumpkinGuessGotPop",[coinCnt,0],Loading.NO_ALL);
                        });
                     });
                  }
                  else if(blockType == 12)
                  {
                     openBlock(thornArr,9);
                     if(lastDigTime <= 1)
                     {
                        Alarm.show("糟糕，挖到荆棘了！");
                     }
                     else
                     {
                        lastDigTime = lastDigTime >= 10 ? 10 : lastDigTime;
                        Alarm.show("糟糕，挖到荆棘了！\n损失了" + lastDigTime + "点挖掘次数。");
                     }
                  }
               });
            });
         },false,true);
         trace(eName);
      }
      
      override protected function updatePanel() : void
      {
         this.updateData();
         this.onStart();
         this.updateDisplay();
      }
      
      override protected function onPanelClick(e:*) : void
      {
         var btnName:String;
         var index:int;
         var u:int = 0;
         if(this.isInAnim)
         {
            return;
         }
         if(!this.isStart)
         {
            return;
         }
         btnName = e.target.name;
         index = int(btnName.split("_")[1]);
         switch(btnName)
         {
            case "btnClose":
               if(this.toolCntArr[0] + this.digTime > 0)
               {
                  Alert.show("你还有机会，是否要放弃挑战？",function():void
                  {
                     doAction("QuitGame").then(function(e:SocketEvent):void
                     {
                        var hasPrize:int = int(ByteArray(e.data).readUnsignedInt());
                        if(hasPrize == 1)
                        {
                           DialogControl.showAllDilogs(164,3).then(function():void
                           {
                              ModuleManager.showAppModule("PumpkinGuessGotPop",[coinCnt,0],Loading.NO_ALL);
                           });
                        }
                        else
                        {
                           ModuleManager.showAppModule("PumpkinGuessLevel");
                           hide();
                        }
                     });
                  });
               }
               else
               {
                  doAction("QuitGame").then(function(e:SocketEvent):void
                  {
                     var hasPrize:int = int(ByteArray(e.data).readUnsignedInt());
                     if(hasPrize == 1)
                     {
                        DialogControl.showAllDilogs(164,3).then(function():void
                        {
                           ModuleManager.showAppModule("PumpkinGuessGotPop",[coinCnt,0],Loading.NO_ALL);
                        });
                     }
                     else
                     {
                        ModuleManager.showAppModule("PumpkinGuessLevel");
                        hide();
                     }
                  });
               }
               break;
            case "btnUse_" + index:
               if(this.isInSonar)
               {
                  return;
               }
               if(this.paramLevel <= 2)
               {
                  if(this.toolCntArr[index - 1] <= 0)
                  {
                     Alarm.show("数量不足!");
                     return;
                  }
                  if(index == 1)
                  {
                     this.isInAnim = true;
                     AnimateManager.playMcAnimate(_ui.toolGo_1,2,"ani",function():void
                     {
                        _ui.toolGo_1.gotoAndStop(1);
                        isInAnim = false;
                        doAction("UseTool1").then(function():void
                        {
                           refresh().then(updateToolView);
                        });
                     },false,true);
                  }
                  else if(index == 2)
                  {
                     if(this.undefinedArr.length <= 0)
                     {
                        Alarm.show("当前没有需要探测的地块！");
                        return;
                     }
                     ui.mcSonar.gotoAndStop(2);
                     this.isInSonar = true;
                     Alarm.show("请选择要调查的未探明地块。",function():void
                     {
                     });
                     for(u = 0; u < this.undefinedArr.length; u++)
                     {
                        ui["block_" + this.undefinedArr[u]].gotoAndStop(11);
                     }
                  }
                  else if(index == 3)
                  {
                     doAction("UseTool3").then(function(e:SocketEvent):void
                     {
                        var isSuc:int = int(ByteArray(e.data).readUnsignedInt());
                        if(isSuc == 0)
                        {
                           Alarm.show("空地不多了，爆破药水无法使用！");
                           return;
                        }
                        refresh().then(function():void
                        {
                           updateToolView();
                           openBlock(bombArr,2);
                        });
                     });
                  }
               }
               break;
            case "cancelUse_2":
               ui.mcSonar.gotoAndStop(1);
               this.isInSonar = false;
               for(u = 0; u < this.undefinedArr.length; u++)
               {
                  ui["block_" + this.undefinedArr[u]].gotoAndStop(6);
               }
         }
      }
      
      override public function hide() : void
      {
         this.undefinedArr = null;
         this.toolCntArr = null;
         this.bombArr = null;
         this.thornArr = null;
         super.hide();
      }
      
      private function updateData() : void
      {
         this.lastDigTime = this.digTime;
         this.digTime = getValue("digTime");
         this.toolCntArr = getValue("toolCntArr");
         this.bombArr = getValue("bombArr");
         this.thornArr = getValue("thornArr");
      }
      
      private function updateDisplay() : void
      {
         ui.txtTime.text = this.digTime;
      }
      
      private function updateToolView() : void
      {
         ui.txtTool_1.text = this.toolCntArr[0];
         ui.txtTool_2.text = this.toolCntArr[1];
         ui.txtTool_3.text = this.toolCntArr[2];
      }
      
      private function openBlock(arr:Array, blockType:int) : void
      {
         var i:int;
         var animMc:* = undefined;
         var bMc:* = undefined;
         for(i = 0; i < arr.length; i++)
         {
            if(Boolean(ui["block_" + arr[i]]))
            {
               ui["block_" + arr[i]].gotoAndStop(blockType);
            }
            if(this.undefinedArr.indexOf(arr[i]) >= 0)
            {
               this.undefinedArr.splice(this.undefinedArr.indexOf(arr[i]),1);
            }
            if(blockType == 2)
            {
               if(Boolean(_ui["aniBomb_" + i]))
               {
                  animMc = _ui["aniBomb_" + i];
                  animMc.visible = true;
                  if(Boolean(ui["block_" + arr[i]]))
                  {
                     animMc.x = ui["block_" + arr[i]].x;
                     animMc.y = ui["block_" + arr[i]].y;
                  }
                  this._isInAnim = true;
                  AnimateManager.playMcAnimate(animMc,1,"",function():void
                  {
                     animMc.visible = false;
                     _isInAnim = false;
                  },false,true);
               }
            }
            else if(blockType == 9)
            {
               if(Boolean(ui["block_" + arr[i]]))
               {
                  this._isInAnim = true;
                  ui["block_" + arr[i]].scaleX = 1.2;
                  ui["block_" + arr[i]].scaleY = 1.2;
                  bMc = ui["block_" + arr[i]];
                  TweenLite.to(bMc,0.3,{
                     "scaleX":1,
                     "scaleY":1,
                     "onComplete":function():void
                     {
                        _isInAnim = false;
                     }
                  });
               }
            }
         }
      }
      
      private function playToolMoveAnim(target:MovieClip, start:MovieClip, dest:MovieClip, callback:Function) : void
      {
         var dist:*;
         var moveTime:Number = NaN;
         this.isInAnim = true;
         target.visible = true;
         target.x = start.x;
         target.y = start.y;
         dist = (start.x - dest.x) * (start.x - dest.x) + (start.y - dest.y) * (start.y - dest.y);
         dist = Math.sqrt(dist);
         dist += 50;
         moveTime = dist * 0.7 / 960;
         TweenLite.to(target,0.4,{
            "scaleX":1.4,
            "scaleY":1.4,
            "onComplete":function():void
            {
               TweenLite.to(target,moveTime * 0.7,{
                  "scaleX":1,
                  "scaleY":1
               });
               TweenLite.to(target,moveTime,{
                  "x":dest.x,
                  "y":dest.y,
                  "onComplete":function():void
                  {
                     isInAnim = false;
                     target.visible = false;
                     callback();
                  }
               });
            }
         });
      }
      
      private function playPkAnim(callback:Function) : void
      {
         var posX:Number;
         var posY:Number;
         var i:int;
         this.isInAnim = true;
         posX = 0;
         posY = 0;
         for(i = 0; i < 4; i++)
         {
            if(Boolean(ui["block_" + this.thornArr[i]]))
            {
               posX += ui["block_" + this.thornArr[i]].x;
               posY += ui["block_" + this.thornArr[i]].y;
               ui["block_" + this.thornArr[i]].gotoAndStop(1);
            }
         }
         ui.pk.x = posX / 4;
         ui.pk.y = posY / 4;
         ui.pk.scaleX = 0;
         ui.pk.scaleY = 0;
         TweenLite.to(ui.pk,0.4,{
            "scaleX":1.3,
            "scaleY":1.3,
            "onComplete":function():void
            {
               TweenLite.to(ui.pk,0.2,{
                  "scaleX":1,
                  "scaleY":1,
                  "onComplete":function():void
                  {
                     isInAnim = false;
                     callback();
                  }
               });
            }
         });
      }
      
      private function set isInAnim(value:Boolean) : void
      {
         this._isInAnim = value;
         for(var i:int = 1; i <= 56; i++)
         {
            CommonUI.setEnabled(ui["block_" + i],!value,false);
         }
      }
      
      private function get isInAnim() : Boolean
      {
         return this._isInAnim;
      }
      
      private function set isInSonar(value:Boolean) : void
      {
         var i:int = 0;
         this._isInSonar = value;
         if(this._isInSonar)
         {
            for(i = 1; i <= 56; i++)
            {
               if(this.undefinedArr.indexOf(i) < 0)
               {
                  CommonUI.setEnabled(ui["block_" + i],false,false);
               }
            }
            CommonUI.setEnabled(ui.btnUse_1,false);
            CommonUI.setEnabled(ui.btnUse_3,false);
            CommonUI.setEnabled(ui.btnClose,false);
         }
         else
         {
            for(i = 1; i <= 56; i++)
            {
               CommonUI.setEnabled(ui["block_" + i],true,false);
            }
            CommonUI.setEnabled(ui.btnUse_1,true);
            CommonUI.setEnabled(ui.btnUse_3,true);
            CommonUI.setEnabled(ui.btnClose,true);
         }
      }
      
      private function get isInSonar() : Boolean
      {
         return this._isInSonar;
      }
   }
}

