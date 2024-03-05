package com.robot.app2.mapProcess
{
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import flash.events.MouseEvent;
   
   public class MapProcess_1392 extends BaseMapProcess
   {
       
      
      private var m_Yescount:Array;
      
      private var m_count:Array;
      
      private var m_countNum:int = 0;
      
      public function MapProcess_1392()
      {
         this.m_Yescount = [2,4,5,3,2,2,1];
         this.m_count = [];
         super();
      }
      
      override protected function init() : void
      {
         depthLevel["page"].visible = true;
         this.btnLevel.addEventListener(MouseEvent.CLICK,this.onMouseClick);
      }
      
      public function update(param1:* = null) : void
      {
      }
      
      public function onMouseClick(param1:MouseEvent) : void
      {
         var _loc3_:int = 0;
         var _loc2_:int = int(param1.target.name.split("_")[1]);
         switch(param1.target.name)
         {
            case "look":
               ModuleManager.showAppModule("MainLineTask_3313R");
               break;
            case "btn_" + _loc2_:
               ++this.m_countNum;
               this.m_count.push(_loc2_);
               if(this.m_countNum < 7)
               {
                  _loc3_ = 0;
                  while(_loc3_ < this.m_countNum)
                  {
                     if(this.m_count[_loc3_] != this.m_Yescount[_loc3_])
                     {
                        this.m_countNum = 0;
                        this.m_count = [];
                     }
                     _loc3_++;
                  }
               }
               else if(_loc2_ == this.m_Yescount[6])
               {
                  depthLevel["page"].visible = false;
                  BitBuffSetClass.setState(23777,1);
               }
               else
               {
                  this.m_countNum = 0;
                  this.m_count = [];
               }
         }
      }
      
      override public function destroy() : void
      {
         this.btnLevel.removeEventListener(MouseEvent.CLICK,this.onMouseClick);
         super.destroy();
      }
   }
}
